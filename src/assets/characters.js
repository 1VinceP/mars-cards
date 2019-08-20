export default {
  astroFighter: {
    name: 'Astro Fighter', // formatted name to display
    id: 'astroFighter', // id to match to the object key
    image: '', // image to display during selection and game
    cost: 0, // crystal cost to unlock
    unlocked: true, // if unlocked or not
    health: 8, // health
    level: 1, // level
    highScore: 0, // highest score achieved with this character
    description: 'Quick and nimble, but lightly armored, the Astro Fighter is better suited for strategically moving around the board rather than brute force attacking.', // description of self and abilities
    actions: ['powerBeam', 'aileronRoll'], // list of possible actions
    actionLimit: 1, // number of actions that may be active at a time
    bonusActions: ['zoom'], // actions that are always active. Does not count against actionLimit
    selectedActions: [], // actions the player has chosen to use
  },

  clawTank: {
    name: 'Claw Tank',
    id: 'clawTank',
    image: '',
    cost: 5000,
    unlocked: false,
    health: 12,
    level: 1,
    highScore: 0,
    description: 'Opposite of the Astro Fighter, the Claw Tank smashes its way through enemies to get where it wants to be.',
    actions: ['claw', 'missiles', 'laserAssault', 'steamRoll', 'discBlast', 'capture'],
    actionLimit: 3,
    bonusActions: null,
    selectedActions: [],
  },

  reconDropship: {
    name: 'Recon Dropship',
    id: 'reconDropship',
    image: '',
    cost: 12000,
    unlocked: false,
    health: 10,
    level: 1,
    highScore: 0,
    description: 'The Recon Dropship is heavily armed and armored, its purpose to deliver a mining unit that excels at gather raw crystals.',
    actions: ['barrage', 'missiles', 'laserAssault', 'zoom', 'capture'],
    actionLimit: 2,
    bonusActions: ['swap'],
    swapTo: 'rover1',
    selectedActions: [],
  },
};
