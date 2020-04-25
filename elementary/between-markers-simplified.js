"use strict";

function betweenMarkers(text, begin, end) {
  const tokens = text.split('');
  let found = false;
  let between = '';
  tokens.some(token => {
    if (token === end) return true;
    if (found) between += token;
    if (token === begin) found = true;
  });
  return between;
}

var assert = require('assert');

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple')
assert.equal(betweenMarkers('What is ><', '>', '<'), '')
assert.equal(betweenMarkers('>apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers("[an apple]","[","]"), 'an apple');
assert.equal(betweenMarkers(">Apple< is simple",">","<"), 'Apple');
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
