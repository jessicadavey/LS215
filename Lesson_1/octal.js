const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// function octalToDecimal(numberString) {
//   // 1. split into an array of characters
//   let strings = numberString.split('');
//   // 2. convert each string into a number
//   let numbers = strings.map(string => DIGITS.indexOf(string));
//   // 3. reverse the array
//   numbers = numbers.reverse();
//   // 4. map each number to number * 8**index
//   let eights = numbers.map((number, index) => number * Math.pow(8, index));
//   // 5. reduce to a sum
//   return eights.reduce((total, currentValue) => total + currentValue);
// }

function octalToDecimal(numberString) {
  return numberString.split('')
    .map(string => DIGITS.indexOf(string))
    .reverse()
    .map((number, index) => number * Math.pow(8, index))
    .reduce((total, currentValue) => total + currentValue);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9