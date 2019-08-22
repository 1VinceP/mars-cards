import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';
import characters from '../assets/characters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerBank: 0,
    characters: { ...characters },
  },
  getters: {
    characterList: state => Object.values(state.characters),
  },
  mutations: {
    [types.UPGRADE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        state.playerBank -= amount;
        ++state.characters[charNameId].health;
        ++state.characters[charNameId].level;
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
  },
  actions: {},
});
