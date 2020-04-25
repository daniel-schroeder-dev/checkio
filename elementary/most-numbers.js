"use strict";

function mostNumbers(...nums){
  if (!nums.length) return 0;
  let max = nums[0];
  let min = nums[0];
  nums.forEach((num) => {
    if (num > max) return max = num;
    if (num < min) return min = num;
  });
  return max - min;
}

var assert = require('assert');

assert.equal(mostNumbers(1, 2, 3), 2, "3-1=2");
assert.equal(mostNumbers(5, -5), 10, "5-(-5)=10");
assert.equal(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000), 12400, "10.2-(-2.2)=12.4");
assert.equal(mostNumbers(), 0, "Empty");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
