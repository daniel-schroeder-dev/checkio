"use strict";

function mostWanted(data) {

  data = data.toLowerCase().replace(/[^a-z]+/g, '').split('');

  const freq = {};

  data.forEach(char => {
    freq[char] ? freq[char]++ : freq[char] = 1;
  });

  let mostFreq = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  return mostFreq.filter(pair => pair[1] === mostFreq[0][1]).sort().shift()[0];

}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(mostWanted("Hello World!"), "l", "1st example");
  assert.equal(mostWanted("How do you do?"), "o", "2nd example");
  assert.equal(mostWanted("One"), "e", "3rd example");
  assert.equal(mostWanted("Oops!"), "o", "4th example");
  assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
  console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}