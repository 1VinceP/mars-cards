export default (dimensions, activeShip, startingCards) => {
  const [col, row] = dimensions.split('x');
  const grid = [];
  const starters = [...startingCards];

  for (let y = 0; y < row; y++) {
    grid.push([]);
    for (let x = 0; x < col; x++) {
      if (x === 1 && y === 1) {
        grid[x][y] = {
          coords: { x, y },
          content: activeShip,
          player: true,
        };
      } else {
        grid[y][x] = { coords: { x, y }, content: starters[0] };
        starters.shift();
      }
    }
  }

  return grid;
};
