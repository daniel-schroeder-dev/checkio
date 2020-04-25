'use strict';

const cipherMap = new Map();

cipherMap.set('0,0', '0,3');
cipherMap.set('0,1', '1,3');
cipherMap.set('0,2', '2,3');
cipherMap.set('0,3', '3,3');
cipherMap.set('1,0', '0,2');
cipherMap.set('1,1', '1,2');
cipherMap.set('1,2', '2,2');
cipherMap.set('1,3', '3,2');
cipherMap.set('2,0', '0,1');
cipherMap.set('2,1', '1,1');
cipherMap.set('2,2', '2,1');
cipherMap.set('2,3', '3,1');
cipherMap.set('3,0', '0,0');
cipherMap.set('3,1', '1,0');
cipherMap.set('3,2', '2,0');
cipherMap.set('3,3', '3,0');

function runMap(ciphers) {

  let newCiphers = [];

  ciphers.forEach(cipher => {
    let key = cipher.row.toString() + ',' + cipher.col.toString();
    let newCipher = cipherMap.get(key).split(',');
    newCiphers.push({ row: +newCipher[0], col: +newCipher[1] });
  });

  newCiphers.sort((a, b) => a.row - b.row || a.col - b.col);

  return newCiphers;

}

function recallPassword(grille, password){

  let numTurns = 0;
  
  let ciphers = [];

  grille.slice('').forEach((row, i) => {
    row = row.split('');
    row.forEach((item, j) => {
      if (item !== 'X') return;
      ciphers.push({ row: i, col: j });
    });
  });

  password = password.slice('');

  ciphers.sort((a, b) => a.row - b.row || a.col - b.col);
  
  let str = '';

  let NUM_RUNS = 4;

  while (numTurns++ < NUM_RUNS) {
    
    ciphers.forEach(cipher => {
      str += password[cipher.row][cipher.col];
    });

    ciphers = runMap(ciphers);

  }

  return str;

}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(recallPassword(['X...',
         '..X.',
         'X..X',
         '....'],
        ['itdf',
         'gdce',
         'aton',
         'qrdi']), 'icantforgetiddqd', "First Example");
    assert.equal(recallPassword(['....',
         'X..X',
         '.X..',
         '...X'],
        ['xhwc',
         'rsqx',
         'xqzz',
         'fyzr']), 'rxqrwsfzxqxzhczy', "Second Example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
