"use strict";

function nonUniqueElements(data) {
  const found = [];
  return data.filter((el, i, arr) => {
    if (found.find(cur => cur === el) !== undefined) return true;
    if (arr.slice(i + 1).find(cur => cur === el) !== undefined) {
      found.push(el);
      return true;
    }
  });
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    assert.deepEqual(nonUniqueElements([0,1,2,3,4,0,1,2,4]), [0,1,2,4,0,1,2,4]);
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}