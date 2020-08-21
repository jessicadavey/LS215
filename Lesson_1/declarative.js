// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] % 2 === 1) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// for (let i = 0; i < array.length; i += 1) {
//   if (isOddNumber(array[i])) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

// function isOddNumber(number) {
//   return number % 2 === 1;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// array.forEach(element => {
//   if (isOddNumber(element)) {
//     newArray.push(element);
//   }
// });

// console.log(newArray);

// function isOddNumber(number) {
//   return number % 2 === 1;
// }

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = array.filter(isOddNumber);
console.log(oddNumbers);

function isOddNumber(number) {
  return number % 2 === 1;
}