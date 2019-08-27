/* eslint-disable max-len */
import actions from './actions';
// import astroFighter from '../images/astroFighter.png';
import * as images from '../images';

const setBonus = (action) => ({ ...action, bonus: true, checked: true });

export default {
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
    baseUpgradeCost: 150, // cost to upgrade to level 2 (increases exponentially) (is multiplied by 2 at render)
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
    baseUpgradeCost: 300,
    highScore: 0,
    description: 'Opposite of the Astro Fighter, the Claw Tank smashes its way through enemies to get where it wants to be.',
    actions: [actions.missiles, actions.laserAssault, actions.steamRoll, actions.discBlast],
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
    baseUpgradeCost: 200,
    highScore: 0,
    description: 'The Recon Dropship is heavily armed and armored. Its purpose is to deliver a mining unit that excels at gather raw crystals.',
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

  speeder: {
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
    baseUpgradeCost: 100,
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
    baseUpgradeCost: 200,
    highScore: 0,
    description: 'The backbone of the Alien fleet, this ship is equipped with stealth technology allowing it to sneak behind enemy lines before unleashing its massive firepower.',
    actions: [actions.recklessBarrage, actions.ultraBeam, actions.laserAssault],
    actionLimit: 2,
    bonusActions: [setBonus(actions.stealthAttack), setBonus(actions.stealthRecon)],
    selectedActions: [],
  },
};
