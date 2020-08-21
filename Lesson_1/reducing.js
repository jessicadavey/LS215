// function add(previousValue, element) {
//   let sum = previousValue + element;
//   console.log(previousValue, element, sum);
//   return sum;
// }

// let count = [1, 2, 3, 4, 5];
// console.log(count.reduce(add, 0));            // 15

function myReduce(array, func, initial) {
  let result;
  if (initial === undefined) {
    result = array[0];

    for (let index = 1; index < array.length; index += 1) {
      result = func(result, array[index]);
    }
  } else {
    result = initial;

    array.forEach(element => {
      result = func(result, element);
    });
  }

  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"