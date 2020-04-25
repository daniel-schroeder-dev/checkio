
"use strict";

function easyUnpack(elements) {
    const unpack = [];
    unpack.push(elements[0]);
    unpack.push(elements[2]);
    unpack.push(elements[elements.length - 2]);
    return unpack;
}

var assert = require('assert');

console.log('Examples:')
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]))

assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7])
assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1])
assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3])
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
