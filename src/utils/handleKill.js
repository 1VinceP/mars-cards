import { crystals } from '@/assets/neutralList';

export default t => {
  const target = { ...t };
  if (target.content.health <= 0) {
    if (target.content.reward) {
      target.content = {
        ...crystals.greenCrystal,
        value: target.content.reward,
      };
    } else {
      target.content = { ...crystals.empty };
    }
  }

  return target.content;
};
