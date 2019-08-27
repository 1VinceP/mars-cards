import orderBy from 'lodash/orderBy';
import * as types from './types';
import achievements from '../assets/achievements';
import characters from '../assets/characters';
import gameModes from '../assets/gameModes';

export default {
  namespaced: true,
  state: {
    gameState: 'menu',
    playerBank: 100000,
    activeShip: { name: '' },
    faction: 'astronauts',
    // current game
    score: 0,
    blueScore: 0,
    endless: false,
    gameMode: 'strike',
    level: {},

    // User data storage
    achievements: { ...achievements },
    characters: { ...characters },
    gameModes: { ...gameModes },
  },

  getters: {
    achievementsList: state => (
      orderBy(Object.values(state.achievements), 'unlocked', 'desc')
    ),

    characterList: state => Object.values(state.characters)
      .filter(char => !char.isSwapModule)
      .filter(char => char.faction === state.faction)
      .map(char => ({
        ...char,
        upgradeCost: (char.baseUpgradeCost * (2 ** char.level)),
        allActions: orderBy([...char.actions, ...char.bonusActions], 'cost'),
      })),

    gameModeList: state => Object.values(state.gameModes),
  },

  mutations: {
    [types.UPGRADE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        state.playerBank -= amount;
        ++state.characters[charNameId].health;
        ++state.characters[charNameId].level;
        if (state.characters[charNameId].swapTo) {
          state.characters[charNameId].swapTo.forEach(swap => {
            ++state.characters[swap].health;
            ++state.characters[swap].level;
          });
        }
      }
    },

    [types.PURCHASE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        state.playerBank -= amount;
        state.characters[charNameId].unlocked = true;
        state.characters[charNameId].level = 1;

        state.achievements.promoted.method = true;

        if (state.characters[charNameId].swapTo) {
          state.characters[charNameId].swapTo.forEach(swap => {
            state.characters[swap].unlocked = true;
            state.characters[swap].level = 1;
          });
        }
      }
    },

    [types.SET_ACTION]: (state, { action, charNameId }) => {
      if (action.bonus) return;

      const newChar = { ...state.characters[charNameId] };
      const actionIndex = newChar.selectedActions.findIndex(a => a.nameId === action.nameId);
      if (actionIndex >= 0) {
        newChar.selectedActions.splice(actionIndex, 1);
      } else if (newChar.selectedActions.length < newChar.actionLimit) {
        newChar.selectedActions.push(action);
      }
      state.characters[charNameId] = newChar;
    },

    [types.SET_GAME_PROP]: (state, [prop, value]) => {
      if (prop === 'gameMode' && value === 'endless') {
        state.endless = !state.endless;
      } else {
        state[prop] = value;
      }
    },
  },
};
