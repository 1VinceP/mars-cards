export const crystals = {
  greenCrystal: {
    name: 'Green Crystal',
    nameId: 'greenCrystal',
    image: '',
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
    image: '',
    faction: 'neutral',
    type: 'blueCrystal',
    description: 'These power your ship. Collect these during missions and spend them immediately to perform powerful actions.',
    stats: { value: [1, 1] },
  },

  empty: {
    name: 'Empty',
    nameId: 'empty',
    image: '',
    faction: 'neutral',
    type: 'none',
    description: 'There is nothing here',
    stats: {},
  },
};

export const structures = {
  crystalField: {
    name: 'Crystal Field',
    nameId: 'crystalField',
    image: '',
    faction: 'neutral',
    type: 'structure',
    description: 'These provide an amount of crystals each time you hit it. Each hit reduces its health.',
    stats: {
      variable: true,
      easy: { health: [2, 2], value: [2, 4] },
      medium: { health: [3, 3], value: [2, 5] },
      hard: { health: [3, 4], value: [3, 7] },
      extreme: { health: [4, 5], value: [4, 9] },
    },
  },

  mesa: {
    name: 'Mesa',
    nameId: 'mesa',
    image: '',
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
    image: '',
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

export const weather = {
  dustStorm: {
    name: 'Dust Storm',
    nameId: 'dustStorm',
    image: '',
    faction: 'neutral',
    type: 'weather',
    description: 'Shuffles every card to a different spot the board.',
    stats: {},
  },

  solarStorm: {
    name: 'Solar Storm',
    nameId: 'solarStorm',
    image: '',
    faction: 'neutral',
    type: 'weather',
    description: 'Changes the value/health of everything on the board to a set amount.',
    stats: {
      variable: true,
      easy: { value: [2, 3] },
      medium: { value: [1, 3] },
      hard: { value: [1, 2] },
      extreme: { value: [1, 1] },
    },
  },

  flashFreeze: {
    name: 'Flash Freeze',
    nameId: 'flashFreeze',
    image: '',
    faction: 'neutral',
    type: 'weather',
    description: 'All structures take damage.',
    stats: {
      variable: true,
      easy: { value: [1, 10] },
      medium: { value: [3, 15] },
      hard: { value: [5, 20] },
      extreme: { value: [7, 25] },
    },
  },
};

export const ammo = {
  bullets: {
    name: 'Bullets',
    nameId: 'bullets',
    image: '',
    faction: 'neutral',
    type: 'ammo',
    description: 'Has more ammo than rockets, but with a lower chance of being special.',
    stats: {
      variable: true,
      easy: { value: [2, 5], specialChance: [20, 30] },
      medium: { value: [2, 7], specialChance: [20, 30] },
      hard: { value: [3, 8], specialChance: [20, 30] },
      extreme: { value: [3, 10], specialChance: [20, 30] },
    },
  },

  rockets: {
    name: 'Rockets',
    nameId: 'rockets',
    image: '',
    faction: 'neutral',
    type: 'ammo',
    description: 'Has less ammo than bullets, but with a higher chance of being special.',
    stats: {
      variable: true,
      easy: { value: [1, 3], specialChance: [40, 50] },
      medium: { value: [1, 4], specialChance: [40, 50] },
      hard: { value: [1, 6], specialChance: [40, 50] },
      extreme: { value: [1, 8], specialChance: [40, 50] },
    },
  },
};

const ammoTypes = {
  standard: {
    name: 'Standard',
    nameId: 'standard',
    image: '',
    faction: 'neutral',
    type: 'ammoType',
    description: 'Deals standard damage. Nothing special here.',
  },

  incendiary: {
    name: 'Incendiary',
    nameId: 'incendiary',
    image: '',
    faction: 'neutral',
    type: 'ammoType',
    description: 'Deals extra damage to enemy ships.',
  },

  cryo: {
    name: 'Cryo',
    nameId: 'cryo',
    image: '',
    faction: 'neutral',
    type: 'ammoType',
    description: 'Deals extra damage to enemies.',
  },

  caustic: {
    name: 'Caustic',
    nameId: 'caustic',
    image: '',
    faction: 'neutral',
    type: 'ammoType',
    description: 'Applies a poison effect that deals 1 damage at the start of the turn for 3-6 turns.',
  },

  armorPiercing: {
    name: 'Armor Piercing',
    nameId: 'armorPiercing',
    image: '',
    faction: 'neutral',
    type: 'ammoType',
    description: 'Deals extra damage to enemy structures.',
  },
};

export default {
  ...crystals,
  ...structures,
  ...weather,
  ...ammo,
  ...ammoTypes,
};
