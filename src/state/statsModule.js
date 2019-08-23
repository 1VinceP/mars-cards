export default {
  state: {
    general: {
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
      strike: {
        gamesPlayed: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
      },
      rescue: {
        gamesPlayed: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
        comradesRescued: 0,
      },
      hotZone: {
        gamesPlayed: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
      },
      endless: {
        strike: {
          gamesPlayed: 0,
          missionsCompleted: 0,
          timesCaptured: 0,
          tilesRemoved: 0,
        },
        rescue: {
          gamesPlayed: 0,
          missionsCompleted: 0,
          timesCaptured: 0,
          tilesRemoved: 0,
        },
        hotZone: {
          gamesPlayed: 0,
          missionsCompleted: 0,
          timesCaptured: 0,
          tilesRemoved: 0,
        },
      },
    },
  },

  mutations: {},
};
