function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
checkScope()

// Block scope i is:  block scope
// Function scope i is:  function scope


// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. 
// You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS)
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


// Anon Function (Concise - Old Example first to change)
// var magic = function() {
// return new Date();
// };

const magic = () => new Date();
// console.log(magic()) - invoke
// console.log(magic) [Function : functionname]


// Write Arrow Functions with Parameters (Old Example first to change)
// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//   };
// console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); 



//Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0)
  }
  
  console.log(sum(1,2,3))
