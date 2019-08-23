/* eslint-disable max-len */
import actions from './actions';

const setBonus = (action) => ({ ...action, bonus: true, checked: true });

export default {
  astroFighter: {
    name: 'Astro Fighter', // formatted name to display
    nameId: 'astroFighter', // id to match to the object key
    faction: 'astronaut',
    type: 'character',
    class: 'Light Air Support',
    image: 'https://www.repubrick.com/images/stories/virtuemart/product/lego7695.jpg', // image to display during selection and game
    cost: 0, // crystal cost to unlock
    unlocked: true, // if unlocked or not
    health: 8, // health
    level: 1, // level
    highScore: 0, // highest score achieved with this character
    description: 'Quick and nimble, but lightly armored, the Astro Fighter is better suited for strategically moving around the board rather than brute force attacking.', // description of self and abilities
    actions: [actions.powerBeam, actions.aileronRoll], // list of possible actions
    actionLimit: 1, // number of actions that may be active at a time
    bonusActions: [setBonus(actions.zoom)], // actions that are always active. Does not count against actionLimit
    selectedActions: [], // actions the player has chosen to use
  },

  clawTank: {
    name: 'Claw Tank',
    nameId: 'clawTank',
    faction: 'astronaut',
    type: 'character',
    class: 'Ground Assault',
    image: 'https://www.repubrick.com/images/stories/virtuemart/product/lego7697.jpg',
    cost: 5000,
    unlocked: false,
    health: 12,
    level: 1,
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
    faction: 'astronaut',
    type: 'character',
    class: 'Air Support and Transport',
    image: 'http://lego.brickinstructions.com/07000/7692/001.jpg',
    cost: 12000,
    unlocked: false,
    health: 10,
    level: 1,
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
    faction: 'astronaut',
    type: 'character',
    class: 'Covert Miner',
    isSwapModule: true,
    image: '',
    cost: 0,
    unlocked: false,
    health: 6,
    level: 1,
    highScore: 0,
    description: 'The Back Digger is a swap unit that is carried by the Recon Dropship. While it isn\'t very strong, the Back Digger is key for increasing crystal production.',
    actions: [],
    actionLimit: 0,
    bonusActions: [setBonus(actions.drill), setBonus(actions.burrow)],
    selectedActions: [],
    swapTo: ['reconDropship'],
  },
};
