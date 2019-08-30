export default (dimensions, activeShip, startingCards) => {
  const [col, row] = dimensions.split('x');
  const grid = [];
  const starters = [...startingCards];

  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      if (x === 1 && y === 1) {
        grid.push({
          coords: { x, y },
          content: activeShip,
          player: true,
        });
      } else {
        grid.push({ coords: { x, y }, content: starters.shift() });
      }
    }
  }

  return grid;
};
