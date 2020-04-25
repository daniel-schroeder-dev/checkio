"use strict";

function indexPower(array, n){
    return isNaN(array[n]**n) ? -1 : array[n]**n;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(indexPower([1, 2, 3, 4], 2))
    
    assert.equal(indexPower([1, 2, 3, 4], 2), 9, "Square");
    assert.equal(indexPower([1, 3, 10, 100], 3), 1000000, "Cube");
    assert.equal(indexPower([0, 1], 0), 1, "Zero power");
    assert.equal(indexPower([1, 2], 3), -1, "IndexError");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}