/* eslint-disable brace-style, no-loop-func */
export default (grid, player, target, direction = false) => {
  const pIndex = grid.findIndex(
    tile => tile.coords.x === player.coords.x && tile.coords.y === player.coords.y,
  );
  const tIndex = grid.findIndex(
    tile => tile.coords.x === target.coords.x && tile.coords.y === target.coords.y,
  );

  let amount = 1;
  const nextIndices = [pIndex];
  if (direction === 'up') {
    do {
      const index = grid.findIndex(
        tile => tile.coords.x === player.coords.x && tile.coords.y === player.coords.y + amount,
      );
      nextIndices.push(index);
      amount++;
    } while (nextIndices.every(index => index >= 0));
  }
  else if (direction === 'down') {
    do {
      const index = grid.findIndex(
        tile => tile.coords.x === player.coords.x && tile.coords.y === player.coords.y - amount,
      );
      nextIndices.push(index);
      amount++;
    } while (nextIndices.every(index => index >= 0));
  }
  else if (direction === 'left') {
    do {
      const index = grid.findIndex(
        tile => tile.coords.x === player.coords.x + amount && tile.coords.y === player.coords.y,
      );
      nextIndices.push(index);
      amount++;
    } while (nextIndices.every(index => index >= 0));
  }
  else if (direction === 'right') {
    do {
      const index = grid.findIndex(
        tile => tile.coords.x === player.coords.x - amount && tile.coords.y === player.coords.y,
      );
      nextIndices.push(index);
      amount++;
    } while (nextIndices.every(index => index >= 0));
  }

  return {
    pIndex,
    tIndex,
    nextIndices,
  };
};
