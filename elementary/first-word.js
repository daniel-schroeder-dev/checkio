"use strict";

function firstWord(string) {
  const tokens = string.replace(/[,.]/, ' ').split(' ');
  return tokens.find(token => {
    if (!token) return;
    if (token[0].match(/[A-Za-z]/) && token[token.length - 1].match(/[A-Za-z]/)) return token;
  });
}

var assert = require('assert');
console.log('Example:')
console.log(firstWord("Hello world"))

// These "asserts" using for self-checking and not for auto-testing
assert.equal(firstWord("Hello world"), "Hello")
assert.equal(firstWord(" a word "), "a")
assert.equal(firstWord("don't touch it"), "don't")
assert.equal(firstWord("greetings, friends"), "greetings")
assert.equal(firstWord("... and so on ..."), "and")
assert.equal(firstWord("hi"), "hi")
assert.equal(firstWord("Hello.world"), "Hello")
console.log("Coding complete? Click 'Check' to earn cool rewards!");
