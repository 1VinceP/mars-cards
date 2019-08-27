import Vue from 'vue';
import Vuex from 'vuex';
import toastr from 'toastr';
import glossaryModule from './glossaryModule';
import gameModule from './gameModule';
import statsModule from './statsModule';
import settingsModule from './settingsModule';
import * as types from './types';

Vue.use(Vuex);

const initialState = () => ({
  user: {},
});

export default new Vuex.Store({
  state: initialState,

  mutations: {
    reset: state => {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },

    setUser: (state, { user }) => {
      state.user = user;
    },
  },

  actions: {
    [types.LOGIN]: ({ commit }, { user }) => {
      const userData = JSON.parse(localStorage.getItem(`userdata-${user.userId}`));
      commit('setUser', { user });
      commit(`settings/${types.LOAD_USER_SETTINGS}`, userData.settings, { root: true });
      commit(`game/${types.LOAD_USER_GAME}`, userData.game, { root: true });
      commit(`stats/${types.LOAD_USER_STATS}`, userData.stats, { root: true });
      toastr.success(`Hello ${user.username}`);
    },

    [types.LOGOUT]: ({ commit }) => {
      commit('reset');
      commit('game/reset');
      commit('settings/reset');
      commit('stats/reset');
    },

    [types.SAVE_USER]: ({ state, rootState }) => {
      if (state.user.userId) {
        const stringState = JSON.stringify(rootState);
        localStorage.setItem(`userdata-${state.user.userId}`, stringState);
        toastr.success('User data saved');
      }
    },

    [types.DELETE_USER]: ({ state, dispatch }) => {
      if (state.user.username) {
        const deleteUser = () => {
          const newUsers = [...JSON.parse(localStorage.getItem('users'))];
          const userIndex = newUsers.findIndex(u => (
            u.username === state.user.username
              && u.altUsername === state.user.altUsername
          ));
          if (userIndex >= 0) {
            newUsers.splice(userIndex, 1);
            localStorage.removeItem(`userdata-${state.user.userId}`);
            localStorage.setItem('users', JSON.stringify(newUsers));
            toastr.success('User deleted');
          }
          dispatch(types.LOGOUT);
        };

        toastr.warning(
          `Are you sure you want to delete data for user ${state.user.username}?`,
          'Click to confirm',
          { timeOut: 3000, progressBar: true, onclick() { deleteUser(); } },
        );
      }
    },
  },

  modules: {
    game: gameModule,
    glossary: glossaryModule,
    stats: statsModule,
    settings: settingsModule,
  },
});
