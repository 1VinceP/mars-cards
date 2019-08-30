import { crystals } from '@/assets/neutralList';

export default deck => (deck.length > 0 ? deck.shift() : { ...crystals.empty });
