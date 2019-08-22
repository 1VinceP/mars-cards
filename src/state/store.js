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
  },
  actions: {

  },
});
