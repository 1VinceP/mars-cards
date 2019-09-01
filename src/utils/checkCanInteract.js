export function checkNeighbor(player, target) {
  const { coords: pCoords } = player;
  const { coords: tCoords } = target;
  let isNeighbor = false;

  if (tCoords.x - 1 === pCoords.x && tCoords.y === pCoords.y) {
    isNeighbor = true;
  } else if (tCoords.x + 1 === pCoords.x && tCoords.y === pCoords.y) {
    isNeighbor = true;
  } else if (tCoords.x === pCoords.x && tCoords.y - 1 === pCoords.y) {
    isNeighbor = true;
  } else if (tCoords.x === pCoords.x && tCoords.y + 1 === pCoords.y) {
    isNeighbor = true;
  }

  return isNeighbor;
}

export default (player, target) => {
  const { coords: pCoords } = player;
  const { coords: tCoords } = target;

  if (target.nameId === 'crystalField') {
    return 'crystalField';
  }

  // return false if target is neutral structure and player has no ammo
  if (player.ammo === 0 && target.type === 'structure' && target.faction === 'neutral') {
    return false;
  }

  let direction = false;
  if (tCoords.x - 1 === pCoords.x && tCoords.y === pCoords.y) {
    direction = 'right';
  } else if (tCoords.x + 1 === pCoords.x && tCoords.y === pCoords.y) {
    direction = 'left';
  } else if (tCoords.x === pCoords.x && tCoords.y - 1 === pCoords.y) {
    direction = 'down';
  } else if (tCoords.x === pCoords.x && tCoords.y + 1 === pCoords.y) {
    direction = 'up';
  }

  // return false for all other cases
  return direction;
};
