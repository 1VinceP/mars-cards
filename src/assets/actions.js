export default {
  zoom: {
    name: 'Zoom',
    nameId: 'zoom',
    id: 0,
    description: 'Swap places with a neighboring tile.',
    target: ['self', 'neighbor'],
    cost: 4,
  },

  powerBeam: {
    name: 'Power Beam',
    nameId: 'powerBeam',
    id: 1,
    description: 'Deal 4 damage to an entire row.',
    target: ['row', 'enemy'],
    cost: 5,
  },

  aileronRoll: {
    name: 'Aileron Roll',
    nameId: 'aileronRoll',
    id: 2,
    description: 'Heal 2 damage.',
    target: ['self'],
    cost: 5,
  },

  claw: {
    name: 'Claw',
    nameId: 'claw',
    id: 3,
    description: 'Deal 2 damage to a neighbor.',
    target: ['neighbor'],
    cost: 2,
  },

  missiles: {
    name: 'Missiles',
    nameId: 'missiles',
    id: 4,
    description: 'Deal 4 damage to all enemies.',
    target: ['all', 'enemy'],
    cost: 6,
  },

  laserAssault: {
    name: 'Laser Assault',
    nameId: 'laserAssault',
    id: 5,
    description: 'Deal 6 damage to all neighboring enemies',
    target: ['all', 'neighbor', 'enemy'],
    cost: 6,
  },

  steamRoll: {
    name: 'Steam Roll',
    nameId: 'steamRoll',
    id: 6,
    description: 'Deal 8 damage to a neighboring structure.',
    target: ['neighbor', 'structure'],
    cost: 4,
  },

  discBlast: {
    name: 'Disc Blast',
    nameId: 'discBlast',
    id: 7,
    description: 'Deal 4 damage to an entire column',
    target: ['column', 'enemy'],
    cost: 5,
  },

  capture: {
    name: 'Capture',
    nameId: 'capture',
    id: 8,
    description: 'Deal 3 damage, target drops x2 coins.',
    target: ['neighbor', 'enemy'],
    cost: 4,
  },

  recklessBarrage: {
    name: 'Reckless Barrage',
    nameId: 'recklessBarrage',
    id: 9,
    description: 'Deal 10 damage to all enemies, and 2 to yourself.',
    target: ['all', 'enemy'],
    cost: 7,
  },

  swap: {
    name: 'Swap',
    nameId: 'swap',
    id: 10,
    description: 'Switch player card for another.',
    target: ['self'],
    cost: 2,
  },

  landAndReload: {
    name: 'Land and Reload',
    nameId: 'landAndReload',
    id: 11,
    description: 'Trade x health for x ammo.',
    target: ['self'],
    cost: 2,
  },
};
