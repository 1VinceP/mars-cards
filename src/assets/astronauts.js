/* eslint-disable max-len */
import actions from './actions';
import * as images from '../images';

const setBonus = (action) => ({ ...action, bonus: true, checked: true });

export const ships = {
  astroFighter: {
    name: 'Astro Fighter', // formatted name to display
    nameId: 'astroFighter', // id to match to the object key
    faction: 'astronauts',
    type: 'ship',
    class: 'Light Air Support',
    image: images.astroFighter, // image to display during selection and game
    cost: 0, // crystal cost to unlock
    unlocked: true, // if unlocked or not
    health: 8, // health
    level: 1, // level
    baseUpgradeCost: 300, // cost to upgrade to level 2 (increases exponentially)
    highScore: 0, // highest score achieved with this ship
    description: 'Quick and nimble, but lightly armored, the Astro Fighter is better suited for strategically moving around the board rather than brute force attacking.', // description of self and abilities
    actions: [actions.powerBeam, actions.aileronRoll], // list of possible actions
    actionLimit: 1, // number of actions that may be active at a time
    bonusActions: [setBonus(actions.zoom)], // actions that are always active. Does not count against actionLimit
    selectedActions: [], // actions the player has chosen to use
  },

  clawTank: {
    name: 'Claw Tank',
    nameId: 'clawTank',
    faction: 'astronauts',
    type: 'ship',
    class: 'Ground Assault',
    image: images.clawTank,
    cost: 5000,
    unlocked: false,
    health: 12,
    level: 1,
    baseUpgradeCost: 600,
    highScore: 0,
    description: 'Opposite of the Astro Fighter, the Claw Tank smashes its way through enemies to get where it wants to be.',
    actions: [actions.missiles, actions.laserAssault, actions.bulldoze, actions.discBlast],
    actionLimit: 3,
    bonusActions: [setBonus(actions.claw)],
    selectedActions: [],
  },

  reconDropship: {
    name: 'Recon Dropship',
    nameId: 'reconDropship',
    faction: 'astronauts',
    type: 'ship',
    class: 'Air Support and Transport',
    image: images.reconDropship,
    cost: 12000,
    unlocked: false,
    health: 10,
    level: 1,
    baseUpgradeCost: 400,
    highScore: 0,
    description: 'The Recon Dropship is heavily armed and armored. Its purpose is to deliver a Back Digger unit that excels at gather raw crystals.',
    actions: [actions.recklessBarrage, actions.landAndReload, actions.laserAssault, actions.zoom, actions.capture],
    actionLimit: 2,
    bonusActions: [setBonus(actions.swap)],
    selectedActions: [],
    swapTo: ['backDigger'],
  },

  backDigger: {
    name: 'Back Digger',
    nameId: 'backDigger',
    faction: 'astronauts',
    type: 'ship',
    class: 'Covert Miner',
    isSwapModule: true,
    image: images.backDigger,
    cost: 0,
    unlocked: false,
    health: 5,
    level: 1,
    highScore: 0,
    description: 'The Back Digger is a swap unit that is carried by the Recon Dropship. While it isn\'t very strong, the Back Digger is key for increasing crystal production.',
    actions: [],
    actionLimit: 0,
    bonusActions: [setBonus(actions.drill), setBonus(actions.burrow), setBonus(actions.swap)],
    selectedActions: [],
    swapTo: ['reconDropship'],
  },

  scoutMiner: { // ETX Alien Strike astro miner
    name: 'Scout Miner',
    nameId: 'scoutMiner',
    faction: 'astronauts',
    type: 'ship',
    class: 'Mining Unit',
    image: '',
    cost: 3500,
    unlocked: false,
    health: 8,
    baseUpgradeCost: 350,
    level: 1,
    highScore: 0,
    description: 'A cheap starting drill unit, the Scout Miner can\'t take much punishment, but is cheap way to start building a retirement fund.',
    actions: [actions.capture, actions.drillJab, actions.shield],
    actionLimit: 1,
    bonusActions: [setBonus(actions.megaDrill)],
    selectedActions: [],
  },

  ultraDrillWalker: {
    name: 'Ultra Drill Walker',
    nameId: 'ultraDrillWalker',
    faction: 'astronauts',
    type: 'ship',
    class: 'Mining Unit/Tank',
    image: '',
    cost: 20000,
    unlocked: false,
    hidden: true,
    health: 12,
    baseUpgradeCost: 650,
    level: 1,
    highScore: 0,
    description: 'Capable of heavy mining and razing alien colonies, this all-in-one mega package is the endgame for most pilots.',
    actions: [actions.missiles, actions.laserAssault, actions.hyperBeam, actions.bulldoze],
    actionLimit: 2,
    bonusActions: [setBonus(actions.swap)],
    selectedActions: [],
    swapTo: ['ultraDrillMiner'],
    // ability: abilities.doubleAmmo,
  },

  ultraDrillMiner: {
    name: 'Ultra Drill Miner',
    nameId: 'ultraDrillMiner',
    faction: 'astronauts',
    type: 'ship',
    class: 'Mining Unit/Tank',
    isSwapModule: true,
    image: '',
    cost: 0,
    unlocked: false,
    hidden: true,
    health: 12,
    level: 1,
    highScore: 0,
    description: 'Though immobile, this unit harvests crystals like none other while it\'s defences fend off minor threats',
    actions: [],
    actionLimit: 0,
    bonusActions: [setBonus(actions.swap), setBonus(actions.gigaDrill), setBonus(actions.missiles)],
    selectedActions: [],
    swapTo: ['ultraDrillWalker'],
  },
};

export const enemies = {
  astroGrunt: {
    name: 'Astro Grunt',
    nameId: 'astroGrunt',
    faction: 'astronauts',
    type: 'enemy',
    image: '',
    description: 'A basic enemy unit.',
    ability: null,
    stats: {
      variable: true,
      easy: { health: [3, 7] },
      medium: { health: [4, 9] },
      hard: { health: [4, 10] },
      extreme: { health: [5, 12] },
    },
  },

  astroCommander: {
    name: 'Astro Commander',
    nameId: 'astroCommander',
    faction: 'astronauts',
    type: 'enemy',
    image: '',
    description: 'A powerful enemy unit.',
    ability: null,
    stats: {
      variable: true,
      easy: { health: [5, 12] },
      medium: { health: [7, 13] },
      hard: { health: [8, 16] },
      extreme: { health: [10, 22] },
    },
  },
};

export const structures = {
  trainingCamp: {
    name: 'Training Camp',
    nameId: 'trainingCamp',
    faction: 'astronauts',
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

  miningCamp: {
    name: 'Mining Camp',
    nameId: 'miningCamp',
    faction: 'astronauts',
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

  astroPrisoner: {
    name: 'Prisoner!',
    nameId: 'astroPrisoner',
    faction: 'astronauts',
    type: 'prisoner',
    image: '',
    description: 'This astronaut has been taken captive! There is a good reward to rescue him.',
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
