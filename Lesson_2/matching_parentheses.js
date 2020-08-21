function isBalanced(string) {
  let tally = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '(') {
      tally += 1;
    } else if (string[index] === ')') {
      tally -= 1;
    }

    if (tally < 0) {
      return false;
    }
  }

  return tally === 0;
}


console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!')  === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);