import * as types from './types';

export default {
  namespaced: true,
  state: {
    user: {},
    version: '0.0.1a',
  },

  mutations: {
    [types.LOGIN]: (state, { user }) => { state.user = user; },

    [types.LOGOUT]: state => { state.user = {}; },

    [types.DELETE_USER]: state => {
      if (state.user.username) {
        const didConfirm = window.confirm(
          `Are you sure you want to delete data for user ${state.user.username}?`,
        );
        if (didConfirm) {
          const newUsers = [...JSON.parse(localStorage.getItem('users'))];
          const userIndex = newUsers.findIndex(user => (
            user.username === state.user.username
              && user.altUsername === state.user.altUsername
          ));
          if (userIndex >= 0) {
            newUsers.splice(userIndex, 1);
            localStorage.removeItem(`userdata-${newUsers[userIndex].userId}`);
            localStorage.setItem('users', JSON.stringify(newUsers));
            alert('User deleted');
          }
          state.user = {};
        }
      }
    },
  },

  actions: {
    [types.SAVE_USER]: ({ state, rootState }) => {
      const stringState = JSON.stringify(rootState);
      localStorage.setItem(`userdata-${state.user.userId}`, stringState);
      alert('User data saved');
    },
  },
};
