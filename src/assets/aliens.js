/* eslint-disable max-len */
import actions from './actions';
// import * as images from '../images';

const setBonus = (action) => ({ ...action, bonus: true, checked: true });

export const ships = {
  speeder: { // alien ship from crystal reaper
    name: 'ETX Speeder',
    nameId: 'speeder',
    faction: 'aliens',
    type: 'ship',
    class: 'Light Air Support',
    image: '',
    cost: 0,
    unlocked: true,
    health: 7,
    level: 1,
    baseUpgradeCost: 200,
    highScore: 0,
    description: 'Thanks to it\'s light armor, the Speeder shoots by enemies at blinding speeds, avoiding fire while raining destruction from above.',
    actions: [actions.aileronRoll, actions.laserAssault],
    actionLimit: 1,
    bonusActions: [setBonus(actions.zoom)],
    selectedActions: [],
  },

  striker: {
    name: 'ETX Striker',
    nameId: 'striker',
    faction: 'aliens',
    type: 'ship',
    class: 'Stealth Assault Ship',
    image: '',
    cost: 8000,
    unlocked: false,
    health: 10,
    level: 1,
    baseUpgradeCost: 400,
    highScore: 0,
    description: 'The backbone of the Alien fleet, this ship is equipped with stealth technology allowing it to sneak behind enemy lines before unleashing its massive firepower.',
    actions: [actions.recklessBarrage, actions.ultraBeam, actions.laserAssault],
    actionLimit: 2,
    bonusActions: [setBonus(actions.stealthAttack), setBonus(actions.stealthRecon)],
    selectedActions: [],
  },

  infiltrator: {
    name: 'ETX Infiltrator',
    nameId: 'infiltrator',
    faction: 'aliens',
    type: 'ship',
    class: 'Swift Flyer/Precision Blaster',
    image: '',
    cost: 10000,
    unlocked: false,
    health: 10,
    level: 1,
    baseUpgradeCost: 500,
    highScore: 0,
    description: 'This versatile unit speeds into position, and then lands for increased stability and firepower.',
    actions: [actions.zoom, actions.powerBeam, actions.shieldMkii, actions.missiles, actions.landAndReload],
    actionLimit: 3,
    bonusActions: [setBonus(actions.swap)],
    selectedActions: [],
    swapTo: ['infiltratorWalker'],
  },

  infiltratorWalker: {
    name: 'ETX Infiltrator Walker',
    nameId: 'infiltratorWalker',
    faction: 'aliens',
    type: 'ship',
    class: 'Swift Flyer/Precision Blaster',
    isSwapModule: true,
    image: '',
    cost: 0,
    unlocked: false,
    health: 10,
    level: 1,
    highScore: 0,
    description: 'After setting up in an offensive position, the Infiltrator rains fire down on its unsuspecting enemies',
    actions: [],
    actionLimit: 0,
    bonusActions: [setBonus(actions.swap), setBonus(actions.ultraBeam), setBonus(actions.laserAssault)],
    selectedActions: [],
    swapTo: ['infiltrator'],
  },

  skyDrill: { // alien ship from switch fighter
    name: 'ETX Sky Drill',
    nameId: 'skyDrill',
    faction: 'aliens',
    type: 'ship',
    class: 'Scout Miner',
    image: '',
    cost: 3500,
    unlocked: false,
    health: 8,
    level: 1,
    baseUpgradeCost: 350,
    highScore: 0,
    description: 'Realizing the untapped potential of exposed crystal fields in the side of mountains, the Sky Drill effortlessly harvests those fields.',
    actions: [actions.stealthRecon, actions.capture, actions.drillJab],
    actionLimit: 1,
    bonusActions: [setBonus(actions.megaDrill)],
    selectedActions: [],
  },

  assaultHarvester: { // alien ship from recon dropship
    name: 'ETX Assault Harvester',
    nameId: 'assaultHarvester',
    faction: 'aliens',
    type: 'ship',
    class: 'Mining Unit/Tank',
    image: '',
    cost: 20000,
    unlocked: false,
    hidden: true,
    health: 12,
    level: 1,
    baseUpgradeCost: 650,
    highScore: 0,
    description: '',
    actions: [],
    actionLimit: 4,
    bonusActions: [],
    selectedActions: [],
  },
};

export const enemies = {
  alienGrunt: {
    name: 'Alien Grunt',
    nameId: 'alienGrunt',
    faction: 'aliens',
    type: 'enemy',
    image: '',
    description: 'A basic enemy unit.',
    ability: null,
    stats: {
      variable: true,
      easy: { health: [1, 3], reward: [1, 3] },
      medium: { health: [4, 9], reward: [1, 4] },
      hard: { health: [4, 10], reward: [2, 5] },
      extreme: { health: [5, 12], reward: [3, 7] },
    },
  },

  alienCommander: {
    name: 'Alien Commander',
    nameId: 'alienCommander',
    faction: 'aliens',
    type: 'enemy',
    image: '',
    description: 'A powerful enemy unit.',
    ability: null,
    stats: {
      variable: true,
      easy: { health: [3, 6], reward: [3, 6] },
      medium: { health: [7, 13], reward: [4, 8] },
      hard: { health: [8, 16], reward: [5, 10] },
      extreme: { health: [10, 22], reward: [6, 12] },
    },
  },
};

export const structures = {
  trainingHive: {
    name: 'Training Hive',
    nameId: 'trainingHive',
    faction: 'aliens',
    type: 'structure',
    image: '',
    description: 'Gives/takes an amount of health equal to its value.',
    stats: {
      variable: true,
      easy: { health: [1, 4], value: [1, 7] },
      medium: { health: [5, 12], value: [1, 7] },
      hard: { health: [7, 15], value: [1, 10] },
      extreme: { health: [10, 18], value: [1, 12] },
      effect: ['health'],
      target: ['player'],
    },
    resolve(effect, player) {
      return {
        props: ['activeShip', 'health'],
        value: effect === 'good'
          ? player.health + this.value
          : player.health - this.value,
      };
    },
  },

  extractionLair: {
    name: 'Extraction Lair',
    nameId: 'extractionLair',
    faction: 'aliens',
    type: 'structure',
    image: '',
    description: 'Gives/takes Blue Crystals if you move over it.',
    stats: {
      variable: true,
      easy: { health: [1, 4], value: [1, 1] },
      medium: { health: [10, 20], value: [1, 2] },
      hard: { health: [15, 25], value: [2, 3] },
      extreme: { health: [20, 30], value: [3, 4] },
      effect: ['blueCrystal'],
      target: ['player'],
    },
    resolve(effect, player, state) {
      return {
        props: ['blueScore'],
        value: effect === 'good'
          ? state.blueScore + this.value
          : state.blueScore - this.value,
      };
    },
  },

  alienPrisoner: {
    name: 'Prisoner!',
    nameId: 'alienPrisoner',
    faction: 'aliens',
    type: 'prisoner',
    image: '',
    description: 'This alien has been taken captive! There is a good reward to rescue him.',
    stats: {
      variable: true,
      easy: { value: [1, 9] },
      medium: { value: [3, 12] },
      hard: { value: [6, 15] },
      extreme: { value: [10, 20] },
    },
  },
};

export default {
  ...ships,
  ...enemies,
  ...structures,
};
