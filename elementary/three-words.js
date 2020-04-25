"use strict";

function threeWords(data) {
  let numWordsInRow = 0;
  data.split(' ').some(token => {
    if (!isNaN(+token)) return numWordsInRow = 0;
    if (++numWordsInRow >= 3) return true;
  });
  return numWordsInRow >= 3;
}

var assert = require('assert');

assert.equal(threeWords("Hello World hello"), true, "1st example");
assert.equal(threeWords("He is 123 man"), false, "2nd example");
assert.equal(threeWords("1 2 3 4"), false, "3rd example");
assert.equal(threeWords("bla bla bla bla"), true, "4th example");
assert.equal(threeWords("Hi"), false, "Letters");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");