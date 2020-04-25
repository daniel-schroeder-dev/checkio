"use strict";

function longRepeat(line) {
  const arr = line.match(/([a-z])\1*/g);
  return !arr ? 0 : arr.reduce((acc, cur) => cur.length > acc ? cur.length : acc , 0);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    assert.equal(longRepeat("abababa"), 1);
    assert.equal(longRepeat(""), 0);
    console.log('"Run" is good. How is "Check"?');
}