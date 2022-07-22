// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
    let twoDArgs = Array.prototype.slice.call(arguments);
    let concatArr = [];
    for(let i = 0; i < twoDArgs.length; i++){
      concatArr = concatArr.concat(twoDArgs[i]);
    }
    return [...new Set(concatArr)];;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
  console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
  console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

// [ 1, 3, 2, 5, 4 ]
// [ 1, 2, 3, 5 ]
// [ 1, 2, 3, 5, 4, 6, 7, 8 ]
// [ 1, 3, 2, 5, 4, 6 ]
// [ 1, 3, 2, 5, 4 ]


function uniteUnique(...arr) {
    return [...new Set(arr.flat())];
  }
  
  // Or as an arrow function
  const uniteUnique = (...arr) => [...new Set(arr.flat())];


function uniteUnique() {
return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);