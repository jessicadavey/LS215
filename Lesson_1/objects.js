let myObject = { a: 1, b: 2, c: 3 };

Object.keys(myObject).forEach(key => {
  console.log('key ' + key + ', value: ' + String(myObject[key]));
});

function doubleObjectValues(object) {
  let newObject = {};
  Object.keys(object).forEach(key => newObject[key] = object[key] * 2);
  return newObject;
}

console.log(doubleObjectValues({ a: 1, b: 2, c: 3 }));