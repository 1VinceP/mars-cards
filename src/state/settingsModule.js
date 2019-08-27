import * as types from './types';
import version from '@/assets/version';

const initialState = () => ({
  actionOrder: 'cost',
  version,
});

export default {
  namespaced: true,
  state: initialState,

  mutations: {
    reset: state => {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },

    [types.LOAD_USER_SETTINGS]: (state, settings) => {
      Object.keys(settings).forEach(key => {
        state[key] = settings[key];
      });
    },

    [types.CHANGE_SETTING]: (state, [prop, value]) => {
      state[prop] = value;
    },
  },
};
