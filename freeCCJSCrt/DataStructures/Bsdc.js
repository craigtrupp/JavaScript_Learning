// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
// The function is supposed to return a new array made up of num copies of arr. Modify the function using spread syntax so that it works correctly 
// (hint: another method we have already covered might come in handy here!). : Copy an Array with the Spread Operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));


// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments.
// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not. : Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) != -1 ? true : false; // check if index return is positive (negative value checks returns -1 : if not return true else return false)
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. 
// elem represents an element that may or may not be present on one or more of the arrays nested within arr. 
// Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line - only outer level required to be iterated through for a search at the nested level of the index, if not found (== -1) push that nested arrray into the returned array
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) == -1){
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));