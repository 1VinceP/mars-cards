import toastr from 'toastr';
import gameModes from './gameModes';
import * as astronauts from './astronauts';
import * as aliens from './aliens';

function notify(title) {
  toastr.success(`"${title}"`, 'Achievement Unlocked!');
}

export default {
  wings: { // need hooked in
    name: 'Got your wings',
    nameId: 'wings',
    description: 'Complete your first mission.',
    reward: 'Rescue game mode.',
    unlocked: false,
    trigger: 'mission complete',
    set method(value) {
      if (!this.unlocked) {
        notify(this.name);
        this.unlocked = value;
        gameModes.rescue.unlocked = value;
      }
    },
    unlocks: ['gameModes.rescue'],
  },

  goldDigger: { // need hooked in
    name: 'Gold Digger',
    nameId: 'goldDigger',
    description: 'Have a high score of over 2000 in 3 levels.',
    reward: 'Gold Rush game mode.',
    unlocked: false,
    trigger: 'high scores',
    set method(value) {
      if (!this.unlocked) {
        notify(this.name);
        this.unlocked = value;
        gameModes.goldRush.unlocked = value;
      }
    },
    unlocks: ['gameModes.goldRush'],
  },

  stranded: { // need hooked in
    name: 'Stranded',
    nameId: 'stranded',
    description: 'Get captured 100 times.',
    reward: 'Hot Zone game mode',
    unlocked: false,
    trigger: 'captured',
    set method(value) {
      if (!this.unlocked) {
        notify(this.name);
        this.unlocked = value;
        gameModes.hotZone.unlocked = value;
      }
    },
    unlocks: ['gameModes.hotZone'],
  },

  promoted: {
    name: 'Promoted!',
    nameId: 'promoted',
    description: 'Purchase your first new ship.',
    reward: 'Endless game mode.',
    unlocked: false,
    trigger: 'purchase',
    set method(value) {
      if (!this.unlocked) {
        notify(this.name);
        this.unlocked = value;
        gameModes.endless.unlocked = value;
      }
    },
    unlocks: ['gameModes.endless'],
  },

  bunnyMoney: { // need hooked in
    name: 'Bunny Money',
    nameId: 'bunnyMoney',
    description: 'Obtain 2500 points in a single mission.',
    reward: '2500 Green Crystals.',
    unlocked: false,
    trigger: 'mission score',
    set method(value) {
      if (!this.unlocked) {
        notify(this.name);
        this.unlocked = value;
      }
    },
    value: 2500,
  },

  topTier: {
    name: 'Top Tier',
    nameId: 'topTier',
    description: 'Upgrade an Astronaut ship to level 10.',
    reward: 'Ultra Drill Walker available.',
    unlocked: false,
    trigger: 'ship level',
    set method({ level, faction }) {
      if (!this.unlocked && level === 10 && faction === 'astronauts') {
        notify(this.name);
        this.unlocked = true;
        astronauts.ships.ultraDrillWalker.hidden = false;
        astronauts.ships.ultraDrillMiner.hidden = false;
      }
    },
    unlocks: ['ships.ultraDrillWalker', 'ships.ultraDrillMiner'],
  },

  eliteRank: {
    name: 'Elite Rank',
    nameId: 'eliteRank',
    description: 'Upgrade an Alien ship to level 10.',
    reward: 'Assault Harvester available.',
    unlocked: false,
    trigger: 'ship level',
    set method({ level, faction }) {
      if (!this.unlocked && level === 10 && faction === 'aliens') {
        notify(this.name);
        this.unlocked = true;
        aliens.ships.assaultHarvester.hidden = false;
      }
    },
    unlocks: ['ships.assaultHarvester'],
  },
};
