"use strict";

function numberRadix(num, radix){
  const badNum = num.split('').some(digit => isNaN(parseInt(digit, radix)));
  if (badNum) return -1;
  return parseInt(num, radix);
}

var assert = require('assert');

assert.equal(numberRadix("AF", 16), 175, "Hex");
assert.equal(numberRadix("101", 2), 5, "Bin");
assert.equal(numberRadix("101", 5), 26, "5 base");
assert.equal(numberRadix("Z", 36), 35, "Z base");
assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
assert.equal(numberRadix("ASD",15), -1);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
