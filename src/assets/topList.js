import gameModes from './gameModes';

export default [
  {
    name: 'Astronauts',
    id: 1,
    description: 'Many years ago earthlings made peace with the Martians. Now Mars is being invaded, and the native Martians are reaching out to Earth for help.',
    glossaryDisplay: 'astronautsList',
  },
  {
    name: 'Aliens',
    id: 2,
    description: 'Green invaders of Mars, the Aliens wiped out Mars\' native inhabitants to claim the Martian crystals as their own.',
    glossaryDisplay: 'aliensList',
  },
  {
    name: 'Actions',
    id: 3,
    description: 'Every playable character (and some non-playable ones too) can take special actions at certain times.',
    glossaryDisplay: 'actionsList',
  },
  {
    name: 'Neutral',
    id: 4,
    description: 'Learn about things such as crystals, weather, and geology here.',
    glossaryDisplay: 'neutralList',
  },
  {
    name: 'How to Play',
    id: 5,
    description: 'Every space marine, no matter how seasoned, finds themselves shocked at the raw beauty and harsh climate of Mars. Learn how to survive here.',
    content: [
      {
        title: 'Welcome',
        paragraph: 'Welcome to Mars, marine! Things around here are a little different than you may be used to, so grab a chair and listen up. In 2001 Earth made contact with life on Mars. After proceeding cautiously it was determined that the inhabitants of Mars were friendly, and we have been in a symbiotic relationship since then. We share our increasing knowledge of crop growth, and they share their invaluable Power Crystals. 6 months ago we received a distress signal from our Martian friends. They fell under attack by another alien species who wanted to conquer them for the Crystals. It is in Earth\'s best interest to assist our friends in protecting Mars as we benefit greatly from their Crystals and the lack of inter-spacial war convening here on Earth.',
      },
      {
        title: 'Brainwashed!?',
        paragraph: 'After unlocking a certain achievement, you will be able to play as the Aliens, if you so choose. The game play is no different - everything you read below will apply to the Astronauts and the Aliens. Alien ships have different traits and actions than Astronaut ships, and Astronaut Enemies/Structures may behave differently than Alien Enemies/Structures. But the game play remains the same.',
      },
      {
        title: 'Your Equipment',
        paragraph: 'Before starting a game, you will be able to select one of many different ships to aid you in the fight. Being a new commander, we are only entrusting you with a small ship to get started, but you will be able to upgrade and purchase more ships as you progress. Each ship has its own armor level, its own special abilities, and choosing the right one for the mission can mean the difference between life and death.',
      },
      {
        title: 'Currency',
        paragraph: 'There are two types of "currency" on Mars: Green Power Crystals and Purple Power Crystals. Green Power Crystals are very common and don\'t give off much energy. These are used to purchase new ships and upgrades in the Game Menu. Purple Power Crystals are much more rare, and they give off a very high level of energy, but only for a short time. These are used to power your ships advanced features such as powerful weapons and evasive maneuvers. Due to how quickly they lose their energy after being mined, these Purple Crystals aren\'t worth anything by the end of the mission and are thrown away. Use it or lose it.',
      },
      {
        title: 'Combat',
        paragraph: 'The game takes place on a 3x3 grid, with you starting in the middle. Each turn you must choose something to do: move, attack, or use an action. To move, select a tile on your left, right, above, or below you. Learn about what happens by interacting with the different tiles in their sections below. To attack, select a tile on your left, right, above or below you. Learn about the different weapon types below. To use an action, select its icon from above the grid. It will either activate immediately or will wait further input from you. Learn about the different types of actions in the Actions section of the glossary.',
      },
      {
        title: 'Ammunition',
        paragraph: 'Ammunition is your primary method of defence. You will start with different amounts and types of ammo depending on the level, but you can always pickup more throughout the fight. If you don\'t want your current ammo stack, you may sell it for 1 Crystal per ammo. Attacking enemies with ammo hurts them without hurting you, unlike moving over the enemy. One attack will spend as much ammo as is necessary to kill the enemy, or all of it if there isn\'t enough. An enemy killed in this way will drop Crystals. Types of ammo include bullets and rockets. If you\'re lucky, you might find some ammo with special properties. Ammo provides the same bonus to you, regardless of your ship. Picking up new ammo will replace your old ammo (without giving you Crystals in return).',
        extra: [
          { name: 'Bullets', detail: 'High ammo count, low chance to be special.' },
          { name: 'Rockets', detail: 'Low ammo count, higher chance to be special.' },
          { name: 'Incediary', detail: 'Deals double damage to certain enemies.' },
          { name: 'Cryo', detail: 'Deals double damage to certain enemies.' },
          { name: 'Toxic', detail: 'Deals an additional 1 damage to the target per turn.' },
          { name: 'Armor Piercing (AP)', detail: 'Hits all enemies in a straight line.' },
        ],
      },
      {
        title: 'Actions',
        paragraph: 'As was mentioned before, your ship\'s special actions are activated by using special Purple Power Crystals. Each action has a different effect, and a different cost, so choose the ones that will be best for the mission. Most ships have "bonus actions" which are free actions (they still cost Purple Crystals to activate) that don\'t count against your Action Total. While a ship may have 6 actions available to it, you most likely won\'t be able to take all of them into battle at the same time.',
      },
      {
        title: 'Enemies',
        paragraph: 'During each mission you will face a variety of Enemies. Enemies have only one stat - health, and some may have special actions they can take. To remove an Enemy, you must deal damage equal to or exceeding their health. If you do this with ammo or with an Action, the Enemy will disappear and leave behind a stash of Crystals. If you move over an Enemy due to not having any ammo, you will take damage equal to the Enemy\'s remaining health and if you survive, you will stay in the new location. If your ship does not survive, you will be taken prisoner and the mission will end (you do not lose anything, the mission just ends. You can even keep the Green Crystals you have collected).',
      },
      {
        title: 'Structures',
        paragraph: 'There are three types of Structures: Friendly, Enemy, and Neutral. Friendly Structures will provide you with some benefit for moving over them such as health, ammo, crystals, etc. Enemy structures will be deal damage to you equal to their value, but will always leave you with at least 1 armor. Moving over an Enemy Structure may have additional effects, such as taking some of your Purple Crystals or ammo. Enemy Structures cannot be damaged by ammo, but can be damaged by some Actions. Neutral Structures can be good or bad. One type of Neutral Structure is a Crystal Field that provides a large amount of Green Crystals. Another type is a Mountain that does not hurt you and you cannot normally hurt or move over it. It simply gets in the way until you use an Action or a Friendly Structure that can remove it.',
      },
      {
        title: 'Weather',
        paragraph: 'Just as Earth has weather systems, so too does Mars. Weather effects everything on the field and is activated when you move over it. For example, a Tornado shuffles every tile to random spots on the board.',
      },
      {
        title: 'Mission Types',
        paragraph: 'There are several mission types that you may take part in. More types are unlocked as you progress through the game. In each game, a deck is created of good and bad tiles. When the deck runs out (by replacing used tiles on the board), you complete the mission.',
        extra: Object.values(gameModes),
      },
      {
        title: 'Saving',
        paragraph: 'Your save data (if any) is loaded when you login. Your current data is saved after every mission, purchase, upgrade, or when the "save" button is pressed in the Options page. Any other changes made (active ship actions, etc) do not initiate a data save. If you have made any other changes that you would like to have saved, make sure to visit the Options page and press "save". Note, player data is saved to your local browser, so having too many accounts may result in storage issues.',
      },
    ],
    glossaryDisplay: '/glossary/guide',
  },
];
