"use strict";

function romanNumerals(number) {

  number = number.toString().split('').map(n => +n).reverse();

  const dict = {
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I',
  };

  let rn = [];

  let power = 1;

  number.forEach(num => {
    num *= power;
    if (dict[num]) {
      rn.push(dict[num]);
    } else if (num === (power * 10) - power) {
      rn.push(dict[power * 10]);
      rn.push(dict[power]);
    } else if (num === (power * 5) - power) {
      rn.push(dict[power * 5]);
      rn.push(dict[power]);
    } else if (num > (power * 5)) {
      let times = (num / power) - 5;
      rn.push(dict[power].repeat(times));
      rn.push(dict[power * 5]);
    } else {
      rn.push(dict[power].repeat(num / power));
    }
    power = power * 10;
  });

  return rn.reverse().join('');

}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(romanNumerals(6), 'VI', "First");
  assert.equal(romanNumerals(76), 'LXXVI', "Second");
  assert.equal(romanNumerals(499), 'CDXCIX', "Third");
  assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
  console.log("Done! Go Check!");
}