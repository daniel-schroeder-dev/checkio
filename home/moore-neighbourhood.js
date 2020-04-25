"use strict";

function countNeighbours(grid, row, col) {
    let numNeighbours = 0;
    grid[row][col - 1] && numNeighbours++;
    grid[row][col + 1] && numNeighbours++;
    if (row) {
        grid[row - 1][col] && numNeighbours++;
        grid[row - 1][col - 1] && numNeighbours++;
        grid[row - 1][col + 1] && numNeighbours++;
    }
    if (row < grid.length - 1) {
        grid[row + 1][col] && numNeighbours++;
        grid[row + 1][col - 1] && numNeighbours++;
        grid[row + 1][col + 1] && numNeighbours++;
    }
    return numNeighbours;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
