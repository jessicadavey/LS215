'use strict';

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  return word1.split('').sort().join('') === word2.split('').sort().join('');
}


function anagram(word, list) {
  // 1. filter list for words that isAnagram(word) === true
  return list.filter(testWord => isAnagram(word, testWord));
}


console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
