// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr
      .map(element => element.toLowerCase())
      .sort((a,b) => a === b ? 0 : a < b ? -1 : 1);
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "G"]));
  // Output : [ 'a', 'a', 'c', 'd', 'g', 'z' ]


// Return a Sorted Array Without Changing the Original Array
// A side effect of the sort method is that it changes the order of the elements in the original array. 
// In other words, it mutates the array in place. 
// One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return []
    .concat(arr)
    .sort((a,b) => a === b ? 0: a < b ? -1 : 1)
  // Only change code above this line
}

nonMutatingSort(globalArray);
// Output : [ 2, 3, 5, 6, 9 ]
