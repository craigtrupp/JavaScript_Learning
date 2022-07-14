// Rewrite the code so the global array bookList is not changed inside either function. 
// The add function should add the given bookName to the end of the array passed to it and return a new array (list). 
// The remove function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

// The global variable
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  return [...bookList, bookName];
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let removedBookList = [...bookList];
  removedBookList.splice(removedBookList.indexOf(bookName), 1);
  return removedBookList;
}

console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));