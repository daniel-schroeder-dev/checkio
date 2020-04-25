"use strict";

function weakPoint(matrix){
  
  const rowSums = matrix.map(row => row.reduce((acc, cur) => acc + cur));
  const minRowSum = Array.from(rowSums).sort((a, b) => a - b)[0];
  const weakRow = rowSums.indexOf(minRowSum);
  
  const colSums = Array.from(rowSums).fill(0);
  matrix.forEach(row => row.forEach((square, i) => colSums[i] += square));
  const minColSum = Array.from(colSums).sort((a, b) => a - b)[0];
  const weakCol = colSums.indexOf(minColSum);
  
  return [weakRow, weakCol];

}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}