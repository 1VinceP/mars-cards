import * as types from './types';

export default {
  namespaced: true,
  state: {
    glossaryList: 'topList',
  },

  mutations: {
    [types.SET_GLOSSARY_LIST]: (state, { list }) => {
      state.glossaryList = list;
    },
  },
};
