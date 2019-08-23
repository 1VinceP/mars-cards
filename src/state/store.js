import Vue from 'vue';
import Vuex from 'vuex';
import glossaryModule from './glossaryModule';
import gameModule from './gameModule';
import statsModule from './statsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game: gameModule,
    glossary: glossaryModule,
    stats: statsModule,
  },
});
