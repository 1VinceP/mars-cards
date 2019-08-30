export default (player, target) => {
  if (player.ammo > 0) {
    if (target.type === 'enemy' || target.type === 'structure') {
      if (target.faction !== player.faction) {
        return true;
      }
    }
  }

  return false;
};
