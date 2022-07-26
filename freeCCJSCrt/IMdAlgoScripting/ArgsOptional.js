// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

function addTogether() {
    const [first, second] = arguments;
    console.log(arguments, arguments.length);
    if(arguments.length == 2 && (Number.isInteger(first) && Number.isInteger(second))){
      return first + second;
    }
    if(Number.isInteger(first) == true && arguments.length == 1){
      return (second) => addTogether(first, second);
    }
    return undefined;
  }
  console.log(addTogether(5)(7));

// { '0': 5 } 1
// { '0': 5, '1': 7 } 2
// 12