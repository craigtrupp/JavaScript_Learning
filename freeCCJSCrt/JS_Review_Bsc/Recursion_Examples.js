// We have defined a function called countdown with one parameter (n). 
// The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
// If the function is called with a number less than 1, the function should return an empty array.
// For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
// Your function must use recursion by calling itself and must not use loops of any kind.

// Only change code below this line
function countdown(n){
    if(n < 1){
      return []
    } else {
      const countDown = countdown(n - 1);
      countDown.unshift(n);
      return countDown;
    }
  }
  // Only change code above this line
  console.log(countdown(10))
  
  // 10 
  // Only change code above this line


//   We have defined a function named rangeOfNumbers with two parameters. 
//   The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
//   The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. 
//   It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){
      return [startNum];
    } else {
      let rangeCapture = rangeOfNumbers(startNum, endNum - 1)
      rangeCapture.push(endNum)
      return rangeCapture;
    }
  };
  console.log(rangeOfNumbers(1, 5))

// takes int N returns factorial through recursion
function factorial(num) {
    if(num == 1 || num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}
//console.log(factorial(4)) == Return (24)
// factorial(4)
//     4 * factorial(3) == (4 * 6) factorial3 call is the bubbled up value of 6 from the previous ran instances of recursion
//         3 * factorial(2) == (3 * 2) factorial2 is just the item from the previous recursion ran or (2 * 1)
//             2 * factorial(1) == 1 (factorial(1) would just return 1)
// Once the recursive factorial call hit the base case,
// previous iterations are bubbled up 

// Ex : The call of 3 * factorial(2) is equal to 3 * 2 that value is then bubbled up as the result of factorial(3) so is multiplied by (4)



