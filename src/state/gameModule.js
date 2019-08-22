import orderBy from 'lodash/orderBy';
import * as types from './types';
import characters from '../assets/characters';

export default {
  namespaced: true,
  state: {
    playing: false,
    playerBank: 10000,
    characters: { ...characters },
  },

  getters: {
    characterList: state => Object.values(state.characters)
      .filter(char => !char.isSwapModule)
      .map(char => ({
        ...char,
        upgradeCost: char.level * 400,
        allActions: orderBy([...char.actions, ...char.bonusActions], 'cost'),
      })),
  },

  mutations: {
    [types.UPGRADE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        state.playerBank -= amount;
        ++state.characters[charNameId].health;
        ++state.characters[charNameId].level;
      }
    },

    [types.PURCHASE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        state.playerBank -= amount;
        state.characters[charNameId].unlocked = true;
        state.characters[charNameId].level = 1;
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

    [types.SET_PLAYING]: (state) => {
      state.playing = !state.playing;
    },
  },
};
