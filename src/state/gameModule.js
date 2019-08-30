import orderBy from 'lodash/orderBy';
import toastr from 'toastr';
import * as types from './types';
import achievements from '../assets/achievements';
import { ships as astroShips } from '../assets/astronauts';
import { ships as alienShips } from '../assets/aliens';
import gameModes from '../assets/gameModes';
import {
  buildDeck, buildGrid, checkCanAttack, checkCanInteract,
  drawCard, getGameIndices, handleKill, handleStructure,
} from '@/utils';
import * as Actions from '@/constants/actions.constants';

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
  activeAction: null,

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
          name, nameId, health, bonusActions, selectedActions, image, faction,
        } = value;
        state[prop] = {
          name,
          nameId,
          faction,
          image,
          health,
          maxHealth: health,
          ammo: 0,
          weapon: '',
          ammoType: '',
          bonusActions,
          selectedActions,
          coords: { x: 1, y: 1 },
        };
      } else {
        state[prop] = value;
      }
    },

    [types.START_GAME]: (state, { level }) => {
      state.gameState = 'grid';
      state.level = level;
      state.activeShip = {
        ...state.activeShip,
        ammo: level.ammo,
        weapon: level.weapon,
        ammoType: level.ammoType,
      };

      const deck = buildDeck(level, state.gameMode, state.faction);
      const starters = deck.splice(0, 8);
      state.deck = deck;
      state.grid = buildGrid(level.grid, state.activeShip, starters);
    },

    movePlayer(state, { player, target, canInteract: direction }) {
      const { pIndex, tIndex, sIndex } = getGameIndices(state.grid, player, target, direction);

      // put player in target spot
      state.grid.splice(tIndex, 1, { coords: { ...target.coords }, content: player, player: true });
      if (target.type === 'crystal') {
        state.score += target.value;
        ++state.blueScore;
      } else if (target.type === 'ammo') {
        state.activeShip.ammo = target.value;
        state.activeShip.weapon = target.nameId;
        state.activeShip.ammoType = target.ammoType;
      } else if (target.type === 'enemy') {
        state.activeShip.health -= target.health;
      } else if (target.type === 'structure' && target.faction !== 'neutral') {
        state.activeShip = handleStructure(player, target);
      }

      // move card into player spot
      if (sIndex >= 0) {
        const shiftTile = state.grid[sIndex];
        state.grid.splice(pIndex, 1, {
          coords: { ...player.coords },
          content: { ...shiftTile.content },
          player: false,
        });
        // draw new card from deck
        state.grid.splice(sIndex, 1, {
          ...shiftTile,
          content: drawCard(state.deck),
        });
      } else {
        // draw new card from deck
        state.grid.splice(pIndex, 1, {
          coords: { ...player.coords },
          content: drawCard(state.deck),
          player: false,
        });
      }
      state.activeShip.coords = target.coords;
    },

    attackTarget(state, { player, target }) {
      const { tIndex } = getGameIndices(state.grid, player, target);
      const targetTile = state.grid[tIndex];

      const newHealth = targetTile.content.health - player.ammo;
      const newAmmo = state.activeShip.ammo - targetTile.content.health;
      targetTile.content.health = newHealth;
      state.activeShip.ammo = newAmmo;
      if (state.activeShip.ammo < 0) {
        state.activeShip.ammo = 0;
      }

      targetTile.content = { ...handleKill(targetTile) };

      if (targetTile.content.type === 'enemy' && state.activeShip.ammoType === 'caustic') {
        targetTile.content.poisonCount = 5;
      }
    },
  },

  actions: {
    [types.CATCH_TILE_CLICK]: ({ state, commit }, { tile }) => {
      const player = state.activeShip;
      const target = { ...tile.content, coords: { ...tile.coords } };
      let canInteract = false;
      let choice;

      if (state.activeAction) {
        canInteract = true;
        choice = Actions.Action;
      } else {
        canInteract = checkCanInteract(player, target);
        choice = checkCanAttack(player, target) ? Actions.Attack : Actions.Move;
      }

      if (!canInteract) {
        toastr.error('You cannot move there');
        return null;
      }

      if (choice === Actions.Move) {
        commit('movePlayer', { player, target, canInteract });
      } else if (choice === Actions.Attack) {
        commit('attackTarget', { player, target });
      }

      if (state.activeShip.health <= 0) {
        toastr.error('YOU DIED');
      }

      return null;
    },
  },
};
