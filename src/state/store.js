import Vue from 'vue';
import Vuex from 'vuex';
import glossaryModule from './glossaryModule';
import gameModule from './gameModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game: gameModule,
    glossary: glossaryModule,
  },
});
