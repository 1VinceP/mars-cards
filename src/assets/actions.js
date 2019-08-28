export default {
  zoom: {
    name: 'Zoom',
    nameId: 'zoom',
    type: 'action',
    class: 'Support',
    description: 'Swap places with a neighboring tile.',
    target: ['self', 'neighbor'],
    cost: 4,
  },

  powerBeam: {
    name: 'Power Beam',
    nameId: 'powerBeam',
    type: 'action',
    class: 'Beam',
    description: 'Deal 4 damage to an entire row.',
    target: ['row', 'enemy'],
    cost: 5,
  },

  aileronRoll: {
    name: 'Aileron Roll',
    nameId: 'aileronRoll',
    type: 'action',
    class: 'Support',
    description: 'Heal 3 damage.',
    target: ['self'],
    cost: 5,
  },

  claw: {
    name: 'Claw',
    nameId: 'claw',
    type: 'action',
    class: 'Attack',
    description: 'Deal 2 damage to a neighbor.',
    target: ['neighbor'],
    cost: 2,
  },

  missiles: {
    name: 'Missiles',
    nameId: 'missiles',
    type: 'action',
    class: 'Barrage',
    description: 'Deal 4 damage to all enemies.',
    target: ['all', 'enemy'],
    cost: 6,
  },

  laserAssault: {
    name: 'Laser Assault',
    nameId: 'laserAssault',
    type: 'action',
    class: 'Barrage',
    description: 'Deal 6 damage to all neighboring enemies.',
    target: ['all', 'neighbor', 'enemy'],
    cost: 6,
  },

  bulldoze: {
    name: 'Bulldoze',
    nameId: 'bulldoze',
    type: 'action',
    class: 'Attack',
    description: 'Deal 8 damage to a neighboring structure.',
    target: ['neighbor', 'structure'],
    cost: 4,
  },

  discBlast: {
    name: 'Disc Blast',
    nameId: 'discBlast',
    type: 'action',
    class: 'Beam',
    description: 'Deal 4 damage to an entire column.',
    target: ['column', 'enemy'],
    cost: 5,
  },

  capture: {
    name: 'Capture',
    nameId: 'capture',
    type: 'action',
    class: 'Attack, Production',
    description: 'Deal 3 damage, target drops x2 coins.',
    target: ['neighbor', 'enemy'],
    cost: 4,
  },

  recklessBarrage: {
    name: 'Reckless Barrage',
    nameId: 'recklessBarrage',
    type: 'action',
    class: 'Barrage',
    description: '10 damage to all enemies, 2 to self.',
    target: ['all', 'enemy', 'self'],
    cost: 7,
  },

  swap: {
    name: 'Swap',
    nameId: 'swap',
    type: 'action',
    class: 'Swap',
    description: 'Switch player card for another.',
    target: ['self'],
    cost: 2,
  },

  landAndReload: {
    name: 'Land and Reload',
    nameId: 'landAndReload',
    type: 'action',
    class: 'Support',
    description: 'Trade x health for x ammo.',
    target: ['self'],
    cost: 2,
  },

  drill: {
    name: 'Drill',
    nameId: 'drill',
    type: 'action',
    class: 'Production',
    description: 'Target crystal gives x2 value.',
    target: ['neighbor', 'crystal'],
    cost: 4,
  },

  megaDrill: {
    name: 'Mega Drill',
    nameId: 'megaDrill',
    type: 'action',
    class: 'Production',
    description: 'Target crystal gives x3 value and x2 energy.',
    target: ['neighbor', 'crystal'],
    cost: 6,
  },

  gigaDrill: {
    name: 'Giga Drill',
    nameId: 'gigaDrill',
    type: 'action',
    class: 'Production',
    description: 'Target crystal gets x4 value and x3 energy',
    target: ['neighbor', 'crystal'],
    cost: 8,
  },

  burrow: {
    name: 'Burrow',
    nameId: 'burrow',
    type: 'action',
    class: 'Support',
    description: 'Heal 2 damage.',
    target: ['self'],
    cost: 3,
  },

  stealthAttack: {
    name: 'Stealth Attack',
    nameId: 'stealthAttack',
    type: 'action',
    class: 'Support',
    description: 'Gain 5 ammo of the current type.',
    target: ['self'],
    cost: 4,
  },

  stealthRecon: {
    name: 'Stealth Recon',
    nameId: 'stealthRecon',
    type: 'action',
    class: 'Support',
    description: 'Heal 3 health.',
    target: ['self'],
    cost: 4,
  },

  ultraBeam: {
    name: 'Ultra Beam',
    nameId: 'ultraBeam',
    type: 'action',
    class: 'Beam',
    description: 'Deal 6 damage to an entire row.',
    target: ['row', 'enemy'],
    cost: 7,
  },

  drillJab: {
    name: 'Drill Jab',
    nameId: 'drillJab',
    type: 'action',
    class: 'jab',
    description: '3 damage to neighbor and behind it.',
    target: ['neighbor', 'enemy', 'next'],
    cost: 5,
  },

  shield: {
    name: 'Shield',
    nameId: 'shield',
    type: 'action',
    class: 'shield',
    description: 'Ignore 2 damage when moving over enemy.',
    target: ['self'],
    cost: 4,
  },

  shieldMkii: {
    name: 'Shield MKII',
    nameId: 'shieldMkii',
    type: 'action',
    class: 'shield',
    description: 'Ignore 5 damage when moving over enemy.',
    target: ['self'],
    cost: 7,
  },

  hyperBeam: {
    name: 'hyperBeam',
    nameId: 'hyperBeam',
    type: 'action',
    class: 'beam',
    description: 'Deal 9 damage to an entire row',
    target: ['row', 'enemy', 'structure'],
    cost: 10,
  },
};
