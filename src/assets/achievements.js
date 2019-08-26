import gameModes from './gameModes';

function notify(title) {
  alert(`"${title}" achievement unlocked!`);
}

export default {
  wings: {
    name: 'Got your wings',
    nameId: 'wings',
    description: 'Complete your first mission',
    reward: 'Rescue game mode',
    unlocked: false,
    trigger: 'mission complete',
    set method(value) {
      if (this.unlocked) { return; }
      notify(this.name);
      this.unlocked = value;
      gameModes.rescue.unlocked = value;
    },
    unlocks: ['gameModes.rescue'],
  },

  promoted: {
    name: 'Promoted!',
    nameId: 'promoted',
    description: 'Purchase your first new ship.',
    reward: 'Endless game mode',
    unlocked: false,
    trigger: 'purchase',
    set method(value) {
      if (this.unlocked) { return; }
      notify(this.name);
      this.unlocked = value;
      gameModes.endless.unlocked = value;
    },
    unlocks: ['gameModes.endless'],
  },
};
