import toastr from 'toastr';
import * as types from './types';

const initialState = () => ({
  general: {
    name: 'General',
    bestShip: '',
    highestScore: 0,
    blueCrystalsCollected: 0,
    kills: 0,
    bossKills: 0,
    structuresDestroyed: 0,
    totalGreenCrystals: 0,
    mostGreenCrystalsInAMission: 0,
    damageDealt: 0,
    damageTaken: 0,
    healthHealed: 0,
    actionsUsed: 0,
    gamesPlayed: 0,
    missionsCompleted: 0,
    timesCaptured: 0,
    tilesRemoved: 0,
  },
  gameModes: {
    name: 'Game Modes',
    strike: {
      name: 'Strike',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      highestScore: 0,
      endless: {
        gamesPlayed: 0,
        timesCaptured: 0,
        tilesRemoved: 0,
        highestScore: 0,
      },
    },
    rescue: {
      name: 'rescue',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      comradesRescued: 0,
      highestScore: 0,
      endless: {
        gamesPlayed: 0,
        timesCaptured: 0,
        comradesRescued: 0,
        tilesRemoved: 0,
        highestScore: 0,
      },
    },
    hotZone: {
      name: 'Hot Zone',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      highestScore: 0,
      endless: {
        gamesPlayed: 0,
        timesCaptured: 0,
        tilesRemoved: 0,
        highestScore: 0,
      },
    },
    goldRush: {
      name: 'Gold Rush',
      gamesPlayed: 0,
      missionsCompleted: 0,
      timesCaptured: 0,
      tilesRemoved: 0,
      highestScore: 0,
      endless: {
        gamesPlayed: 0,
        timesCaptured: 0,
        tilesRemoved: 0,
        highestScore: 0,
      },
    },
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

    [types.UPDATE_RECORD_BATCH]: (state, { records, score, mode, endless }) => {
      if (score > state.general.highestScore) {
        state.general.highestScore = score;
      }

      if (score > state.general.mostGreenCrystalsInAMission) {
        state.general.mostGreenCrystalsInAMission = score;
      }

      if (score > state.gameModes[mode].highestScore) {
        state.gameModes[mode].highestScore = records.highestScore;
      }

      state.general.totalGreenCrystals += score;

      Object.keys(records).forEach(record => {
        if (typeof state.general[record] === 'number') {
          console.log(record, state.general[record], records[record]);
          state.general[record] += records[record];
        }
      });

      Object.keys(records).forEach(record => {
        if (typeof state.gameModes[mode][record] === 'number') {
          state.gameModes[mode][record] += records[record];
        }
      });

      if (endless) {
        Object.keys(records).forEach(record => {
          if (typeof state[mode].endless[record] === 'number') {
            state.gameModes[mode].endless[record] += records[record];
          }
        });

        if (records.score > state.gameModes[mode].endless.highestScore) {
          state.gameModes[mode].endless.highestScore = records.score;
        }
      }
    },
  },
};
