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

    [types.LOAD_USER_OPTIONS]: (state, options) => {
      Object.keys(options).forEach(key => {
        state[key] = options[key];
      });
    },

    [types.CHANGE_SETTING]: (state, [prop, value]) => {
      state[prop] = value;
    },
  },
};
