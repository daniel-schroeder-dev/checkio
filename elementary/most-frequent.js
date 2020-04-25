"use strict";

function mostFrequent(data) {
    // returns the most frequenly occuring string in the given array
    const strings = {};
    data.forEach(string => {
        strings[string] = strings[string] ? ++strings[string] : 1;
    });
    let mostFrequentString = '';
    let higestNumOccurences = 0;
    for (let string in strings) {
        if (strings[string] > higestNumOccurences) {
            higestNumOccurences = strings[string];
            mostFrequentString = string;
        }
    }
    // your code here
    return mostFrequentString;
}

var assert = require('assert');

console.log('Example:')
console.log(mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]))

assert.equal(mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]), 'a')
assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
