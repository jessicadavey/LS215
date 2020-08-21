'use strict';

function myFilter(array, func) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (func(array[index], index, array)) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let result = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

console.log(result);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

let answer = multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]
console.log(answer);