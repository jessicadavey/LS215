function doubler(array) {

}

doubler([1, 2, 3, 4]); // [2, 4, 6, 8]
doubler(['a', 'b']); // ['aa', 'bb']
doubler([true, false]); // [true, true, false, false]

let arr = [1, 2, 'a', 'b'];
doubler(arr); // [2, 4, 'aa', 'bb']
console.log(arr); // [1, 2, 'a', 'b']
doubler([1, 2, NaN, Infinity]); // [2, 4, NaN, Infinity]
doubler([0.1, -2]); // [0.2, -4]
doubler (['', 'hello']); // ['', 'hellohello']

