export default (player, target) => {
  if (target.faction === player.faction) {
    return { ...player, health: player.health + target.value };
  }

  return { ...player };
};
