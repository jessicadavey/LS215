function myMap(array, func) {
  let result = [];
  array.forEach(element => {
    result.push(func(element));
  });

  return result;
}

let plusOne = n => n + 1;
let result = myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
console.log(result);

function getBooksTitle(books) {
  console.log(myMap(books, getTitle));
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

getBooksTitle(books);
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]