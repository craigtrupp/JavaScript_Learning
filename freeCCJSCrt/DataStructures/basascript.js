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


//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. : Truncate a String
function truncateString(str, num) {
  return str.length > num ? `${str.substring(0, num)}...`  : str;
}


// Boo who
// Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false. : Boo Who
function booWho(bool) {
  return typeof(bool) == 'boolean' ? true : false;
}

booWho(null);

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let upperCaseEach = [];
  let origStringSplit = str.split(" ");
  for(let i = 0; i < origStringSplit.length; i++){
    let firstTransform = origStringSplit[i][0].toUpperCase();
    let restLower = origStringSplit[i].substring(1).toLowerCase();
    upperCaseEach.push(`${firstTransform}${restLower}`);
  }
  return upperCaseEach.join(" ");
}

// You are given two arrays and an index. Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let combinedArray = arr2.slice();
  combinedArray.splice(n, 0, ...arr1);
  return combinedArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// Falsy Bouncer : Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Falsy Values : In JavaScript, there are 6 falsy values. If you convert any of these to a boolean, it will return false. 
// Falsy Values = [false, undefined, null, NaN, 0, ""] : https://www.samanthaming.com/tidbits/19-2-ways-to-convert-to-boolean/
function bouncer(arr) {
  let non_falsy = [];
  for(let i = 0; i < arr.length; i++){
    if(Boolean(arr[i]) == true){
      non_falsy.push(arr[i])
    }
  }
  return non_falsy;
}

bouncer([7, "ate", "", false, 9]);


// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b);
  console.log(arr);
  for(let i = 0; i <= arr.length; i++){
    if(num > arr[arr.length - 1]){
      arr.push(num);
      break;
    } else if(arr[i] < num){
      continue;
    } 
    arr.splice(i, 0, num);
    break;
  }
  return arr.indexOf(num);
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([2, 5, 10], 15));


// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. 
function mutation(arr) {
  let secondStringArr = arr[1].toLowerCase().split("");
  let checkCount = arr[1].length;
  let secondStringGreaterCounter = 0; // second conditional check for longer strings passed in second argument which matches all in first element but has left over values
  for(let i = 0 ; i < arr[0].length; i++){
    let firstStringCharacter = arr[0][i].toLowerCase();
    if(secondStringArr.indexOf(firstStringCharacter) != -1){
      secondStringArr.splice(secondStringArr.indexOf(firstStringCharacter), 1);
      secondStringGreaterCounter += 1;
    }
  }
  if(secondStringArr.length == 0 || secondStringGreaterCounter == arr[0].length){
    return true;
  }
  return false;
}

function mutation_correct(arr) {
  let firstStringArr = arr[0].toLowerCase().split("");
  let secondStringArr = arr[1].toLowerCase().split("");
  console.log(firstStringArr, secondStringArr)
  for(let i = 0; i < arr[1].length; i++){
    let checkStringValue = arr[1][i].toLowerCase();
    if(firstStringArr.indexOf(checkStringValue) >= 0){
      secondStringArr.shift();
    }
  }
  return secondStringArr.length == 0 ? true : false
}

console.log(mutation(["helloy", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "Helllo"]));
console.log(mutation(["Mary", "Aarmy"]))
console.log(mutation(["voodoo", "no"]))



// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. : Chunky Monkey
// set amount of nested arrays by first loop push empty array into OuterArray based on the length of the arr passed divided by the size (Ex : 9/4 = 2.3 - loop logic will create 3 arrays nested in outer array)
function chunkArrayInGroups(arr, size) {
  let outerArray = [];
  let innerArrayCount = arr.length/size; // iterate through return to create arrays to push into outer array
  for(let i = 0; i < innerArrayCount; i++){
    outerArray.push([]);
  }
  // counter to determine how many array indexes to pass to nested array (j value in outer loop)
  let sizeCounter = 0;
  // start at outer loop for pushing arr values into correct nested array
  for(let j = 0; j < outerArray.length; j++){
    // start adding from passed array to function - using m to index 
    for(let m = 0; m < arr.length; m++){
      // push into outer array until the size counter hits the provided size from function call
      if(sizeCounter < size){
        outerArray[j].push(arr[m]);
        sizeCounter++;
      } // if provided size is hit, remove all items from provided array, reset the sizeCounter and break to outer loop to start adding to next nested index, splice provided array allows for m to not add duplicate values  
      else if (sizeCounter == size) { 
        arr.splice(0, size);
        sizeCounter = 0;
        break;
      }
    }
  }
  return outerArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [['a', 'b'], ['c', 'd']]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]


