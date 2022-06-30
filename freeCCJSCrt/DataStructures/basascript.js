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
  
