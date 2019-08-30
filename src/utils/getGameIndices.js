export default (grid, player, target, direction = false) => {
  const pIndex = grid.findIndex(
    tile => tile.coords.x === player.coords.x && tile.coords.y === player.coords.y,
  );
  const tIndex = grid.findIndex(
    tile => tile.coords.x === target.coords.x && tile.coords.y === target.coords.y,
  );

  let sIndex;
  if (direction === 'up') {
    sIndex = grid.findIndex(
      tile => tile.coords.x === player.coords.x && tile.coords.y === player.coords.y + 1,
    );
  } else if (direction === 'down') {
    sIndex = grid.findIndex(
      tile => tile.coords.x === player.coords.x && tile.coords.y === player.coords.y - 1,
    );
  } else if (direction === 'left') {
    sIndex = grid.findIndex(
      tile => tile.coords.x === player.coords.x + 1 && tile.coords.y === player.coords.y,
    );
  } else if (direction === 'right') {
    sIndex = grid.findIndex(
      tile => tile.coords.x === player.coords.x - 1 && tile.coords.y === player.coords.y,
    );
  }

  return {
    pIndex,
    tIndex,
    sIndex,
  };
};
