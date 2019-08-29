import toastr from 'toastr';
import * as types from './types';

const initialState = () => ({
  general: {
    name: 'General',
    bestShip: '',
    kills: 0,
    bossKills: 0,
    totalGreenCrystals: 0,
    mostGreenCrystalsAtOneTime: 0,
    damageDealt: 0,
    damageTaken: 0,
    shieldPointsHealed: 0,
    actionsUsed: 0,
    gamesPlayed: 0,
    missionsCompleted: 0,
    timesCaptured: 0,
  },
  gameModes: {
    name: 'Game Modes',
    strike: {
      name: 'Strike',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      endless: {
        gamesPlayed: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
      },
    },
    rescue: {
      name: 'rescue',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      comradesRescued: 0,
      endless: {
        gamesPlayed: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
        comradesRescued: 0,
      },
    },
    hotZone: {
      name: 'Hot Zone',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      endless: {
        gamesPlayed: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
      },
    },
    goldRush: {
      name: 'Gold Rush',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      tilesRemoved: 0,
      endless: {
        gamesPlayed: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
        tilesRemoved: 0,
      },
    },
    // endless: {
    //   name: 'Endless',
    //   strike: {
    //     name: 'Endless Strike',
    //     gamesPlayed: 0,
    //     missionsCompleted: 0,
    //     timesCaptured: 0,
    //     tilesRemoved: 0,
    //   },
    //   rescue: {
    //     name: 'Endless Rescue',
    //     gamesPlayed: 0,
    //     missionsCompleted: 0,
    //     timesCaptured: 0,
    //     tilesRemoved: 0,
    //   },
    //   hotZone: {
    //     name: 'Endless Hot Zone',
    //     gamesPlayed: 0,
    //     missionsCompleted: 0,
    //     timesCaptured: 0,
    //     tilesRemoved: 0,
    //   },
    //   goldRush: {
    //     name: 'Endless Gold Rush',
    //     gamesPlayed: 0,
    //     missionsCompleted: 0,
    //     timesCaptured: 0,
    //     tilesRemoved: 0,
    //   },
    // },
  },
});

export default {
  namespaced: true,
  state: initialState,

  getters: {
    recordsList: state => ({ ...state }),
  },

  mutations: {
    reset: state => {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },

    [types.LOAD_USER_RECORDS]: (state, records) => {
      Object.keys(records).forEach(key => {
        state[key] = records[key];
      });
    },

    [types.UPDATE_RECORD]: (state, { prop, value, isEndless = false }) => {
      console.log(prop, value, isEndless);
      toastr.error('Records cannot be updated at this time');
    },
  },
};
