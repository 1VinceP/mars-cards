import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import random from 'lodash/random';
import shuffle from 'lodash/shuffle';
import cards from '../assets/completeList';

function getCounts(mode, weatherCount, totalCards) {
  const result = {
    good: 0, bad: 0, neutral: 0, weather: 0,
  };

  if (mode === 'strike') {
    result.weather = weatherCount;
    const leftover = totalCards - weatherCount;
    result.neutral = Math.floor(leftover / 3);
    result.good = Math.floor(leftover / 3);
    result.bad = Math.floor(leftover / 3);
    while (reduce(result, (sum, next) => sum + next, 0) < totalCards) {
      ++result.neutral;
    }
  }

  return result;
}

function getCards(count, faction, type, degree) {
  const options = [];
  const set = filter(cards, card => card.faction === faction && card.type === type);

  for (let i = 1; i <= count; i++) {
    let card = set[Math.floor(Math.random() * set.length)];

    // cleanup
    card = card.stats.variable
      ? { ...card, ...card.stats[degree] }
      : { ...card, ...card.stats };
    delete card.stats;

    // get random values for each card
    if (Array.isArray(card.value)) {
      card.value = random(card.value[0], card.value[1]);
    }
    if (Array.isArray(card.health)) {
      card.health = random(card.health[0], card.health[1]);
    }
    if (Array.isArray(card.reward)) {
      card.reward = random(card.reward[0], card.reward[1]);
    }
    if (Array.isArray(card.specialChance)) {
      const chance = random(card.specialChance[0], card.specialChance[1]);
      const hit = random(1, 100);
      const list = ['incendiary', 'cryo', 'caustic', 'armorPiercing'];
      if (hit <= chance) {
        card.ammoType = list[random(0, 4)];
      } else {
        card.ammoType = 'standard';
      }
      delete card.specialChance;
    }

    options.push(card);
  }

  return options;
}

function getStrikeDeck(level, faction, enemyFaction) {
  let deck = [];
  const { degree, totalCards, weatherCount } = level;
  const counts = getCounts('strike', weatherCount, totalCards);

  // get weather cards
  deck = deck.concat(getCards(counts.weather, 'neutral', 'weather', degree));

  // get neutral
  deck = deck.concat(getCards(Math.ceil(counts.neutral / 2), 'neutral', 'crystal', degree));
  deck = deck.concat(getCards(Math.floor(counts.neutral / 2), 'neutral', 'structure', degree));

  // get good
  deck = deck.concat(getCards(Math.ceil(counts.neutral / 2), 'neutral', 'ammo', degree));
  deck = deck.concat(getCards(Math.floor(counts.good / 2), faction, 'structure', degree));

  // get bad
  deck = deck.concat(getCards(Math.ceil(counts.bad / 2), enemyFaction, 'enemy', degree));
  deck = deck.concat(getCards(Math.floor(counts.bad / 2), enemyFaction, 'structure', degree));

  return shuffle(deck);
}

export default (level, mode, faction) => {
  const enemyFaction = faction === 'astronauts'
    ? 'aliens' : 'astronauts';

  return mode === 'strike' && getStrikeDeck(level, faction, enemyFaction);
};
