let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangleArrays) {
  return rectangleArrays.map(array => array[0] * array[1])
    .reduce((total, area) => total + area);
}

console.log(totalArea(rectangles));    // 141

rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(isSquare);
  return totalArea(squares);
}

function isSquare(array) {
  return array[0] === array[1];
}

console.log(totalSquareArea(rectangles));    // 121