"use strict";

function betweenMarkers(text, begin, end) {
    const beginPos = text.indexOf(begin);
    const endPos = text.indexOf(end);
    if (beginPos > -1 && endPos > -1) {
        if (beginPos > endPos) return '';
        const subStart = beginPos + begin.length;
        return text.substring(subStart, endPos);
    }
    if (endPos > -1) {
        return text.substring(0, endPos);
    }
    if (beginPos > -1) {
        const subStart = beginPos + begin.length;
        return text.substring(subStart);
    }
    return text;
}

var assert = require('assert');

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers("<head><title>My new site</title></head>",
                            "<title>", "</title>"), 'My new site')
assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
