"use strict";

function safePawns(data) {
  
  const board = [];
  const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
  data.forEach(token => {
    let pos = {};
    pos.file = chars.indexOf(token.split('')[0]);
    pos.rank = +token.split('')[1];
    board.push(pos);
  });
  
  board.sort((a, b) => !(a.file - b.file) ? a.rank - b.rank : a.file - b.file);
  
  const safe = board.reduce((acc, cur) => {
  
    if (board.findIndex(el => el.file === cur.file - 1 && el.rank === cur.rank - 1 ) >= 0) {
      return acc + 1;
    }
  
    if (board.findIndex(el => el.file === cur.file + 1 && el.rank === cur.rank - 1 ) >= 0) {
      return acc + 1;
    }
  
    return acc;
  
  }, 0);
  
  return safe;

}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
    assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}