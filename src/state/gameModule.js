import orderBy from 'lodash/orderBy';
import * as types from './types';
import achievements from '../assets/achievements';
import { ships as astroShips } from '../assets/astronauts';
import { ships as alienShips } from '../assets/aliens';
import gameModes from '../assets/gameModes';
import { buildDeck, buildGrid } from '@/utils';

const initialState = () => ({
  gameState: 'menu',
  playerBank: 200000,
  activeShip: { name: '' },
  faction: 'astronauts',
  // current game
  score: 0,
  blueScore: 0,
  endless: false,
  gameMode: 'strike',
  level: {},
  deck: [],
  grid: [],

  // User data storage
  achievements: { ...achievements },
  ships: { ...astroShips, ...alienShips },
  gameModes: { ...gameModes },
});

export default {
  namespaced: true,
  state: initialState,

  getters: {
    achievementsList: state => (
      orderBy(Object.values(state.achievements), ['unlocked', 'name'], 'asc')
    ),

    shipList: state => Object.values(state.ships)
      .filter(char => !char.hidden)
      .filter(char => !char.isSwapModule)
      .filter(char => char.faction === state.faction)
      .map(char => ({
        ...char,
        upgradeCost: ((char.baseUpgradeCost / 2) * (2 ** char.level)),
        allActions: orderBy([...char.actions, ...char.bonusActions], 'cost'),
      })),

    gameModeList: state => Object.values(state.gameModes),

    deckSize: state => state.deck.length,
  },

  mutations: {
    reset: state => {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },

    [types.LOAD_USER_GAME]: (state, game) => {
      Object.keys(game).forEach(key => {
        state[key] = game[key];
      });
    },

    [types.UPGRADE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        const ship = state.ships[charNameId];
        state.playerBank -= amount;
        ++ship.health;
        ++ship.level;

        achievements.topTier.method = { level: ship.level, faction: ship.faction };
        achievements.eliteRank.method = { level: ship.level, faction: ship.faction };

        if (ship.swapTo) {
          ship.swapTo.forEach(swap => {
            ++state.ships[swap].health;
            ++state.ships[swap].level;
          });
        }
      }
    },

    [types.PURCHASE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        const ship = state.ships[charNameId];
        state.playerBank -= amount;
        ship.unlocked = true;
        ship.level = 1;

        state.achievements.promoted.method = true;

        if (ship.swapTo) {
          ship.swapTo.forEach(swap => {
            state.ships[swap].unlocked = true;
            state.ships[swap].level = 1;
          });
        }
      }
    },

    [types.SET_ACTION]: (state, { action, charNameId }) => {
      if (action.bonus) return;

      const ship = { ...state.ships[charNameId] };
      const actionIndex = ship.selectedActions.findIndex(a => a.nameId === action.nameId);
      if (actionIndex >= 0) {
        ship.selectedActions.splice(actionIndex, 1);
      } else if (ship.selectedActions.length < ship.actionLimit) {
        ship.selectedActions.push(action);
      }
      state.ships[charNameId] = ship;
    },

    [types.SET_GAME_PROP]: (state, [prop, value]) => {
      if (prop === 'gameMode' && value === 'endless') {
        state.endless = !state.endless;
      } else if (prop === 'activeShip') {
        const {
          name, nameId, health, bonusActions, selectedActions, image,
        } = value;
        state[prop] = {
          name,
          nameId,
          image,
          health,
          maxHealth: health,
          ammo: 0,
          ammoType: '',
          bonusActions,
          selectedActions,
        };
      } else {
        state[prop] = value;
      }
    },

    [types.START_GAME]: (state, { level }) => {
      state.level = level;
      state.gameState = 'grid';
      const deck = buildDeck(level, state.gameMode, state.faction);
      const starters = deck.splice(0, 8);
      state.deck = deck;
      state.grid = buildGrid(level.grid, state.activeShip, starters);
    },
  },
};
