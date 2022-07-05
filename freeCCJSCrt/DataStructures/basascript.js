// Reverse a String : 
function reverseString(str) {
    let str_arr = str.split("");
    return str_arr.reverse().join('');
  }
  
  console.log(reverseString("hello"));


// Factorialize a Number : 
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
function factorialize(num) {
    if(num == 1 || num == 0){
      return 1;
    } else {
      return num * factorialize(num - 1)
    }
  }
  
  console.log(factorialize(5));

//Find the Longest Word in a String : 
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
    return str.split(" ").reduce((prev, cur) => prev.length > cur.length ? prev : cur).length;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function findLongestWordLength_deux(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
}
//In case you’re wondering about that 0 after the callback function, it is used to give an initial value to the longest, so that Math.max will know where to start.


// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  let largest_set = [];
  for(let i = 0; i < arr.length; i++){
   largest_set.push(Math.max(...arr[i]))
   console.log(arr[i]);
  }
  return largest_set;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target). : Confirm the Ending
function confirmEnding(str, target){
  let iterations = str.length - target.length;
  let count_return = [];
  for(let i = str.length - 1; i >= iterations; i--){
    count_return.push(str[i]);
    console.log(str[i]);
  }
  let target_string = count_return.reverse().join("");
  return target_string == target ? true : false;
}
console.log(confirmEnding("Open sesame", "sage"))
  
