import shuffle from 'lodash/shuffle';
import filter from 'lodash/filter';
import cards from '@/assets/completeList';

export function getCard(count, type, faction = 'neutral') {
  const options = [];
  const set = filter(cards, card.type === type && card.faction === faction);
  for (const i = 1; i <= count; i++) {
    options.push([...set]);
  }
}

export default (level, faction) => {
  const deck = [];
  const { degree, totalCards, weatherCount } = level;
  let remainingCards = totalCards;

  getCard(weatherCount, 'weather').forEach(card => deck.push(card));
  remainingCards -= weatherCount;

  return shuffle(deck);
};
