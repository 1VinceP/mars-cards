export default {
  greenCrystal: {
    name: 'Green Crystal',
    nameId: 'greenCrystal',
    id: 1,
    faction: 'neutral',
    type: 'crystal',
    description: 'The typical currency of the game. Collect these during missions and spend them afterwards to upgrade and unlock new ships.',
    stats: {
      variable: true,
      easy: { value: [1, 6] },
      medium: { value: [1, 8] },
      hard: { value: [2, 12] },
      extreme: { value: [3, 14] },
    },
  },

  blueCrystal: {
    name: 'Blue Crystal',
    nameId: 'blueCrystal',
    id: 2,
    faction: 'neutral',
    type: 'crystal',
    description: 'These power your ship. Collect these during missions and spend them immediately to perform powerful actions.',
    stats: { value: [1, 1] },
  },

  mesa: {
    name: 'Mesa',
    nameId: 'mesa',
    id: 3,
    faction: 'neutral',
    type: 'structure',
    description: 'These just get in your way.',
    stats: {
      variable: true,
      easy: { health: [6, 12] },
      medium: { health: [10, 20] },
      hard: { health: [15, 30] },
      extreme: { health: [25, 50] },
    },
  },

  mountain: {
    name: 'Mountain',
    nameId: 'mountain',
    id: 4,
    faction: 'neutral',
    type: 'structure',
    description: 'These really get in your way.',
    stats: {
      variable: true,
      easy: { health: [10, 20] },
      medium: { health: [15, 30] },
      hard: { health: [25, 50] },
      extreme: { health: [40, 80] },
    },
  },
};
