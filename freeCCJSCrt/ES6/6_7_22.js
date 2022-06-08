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

// Use Spread Operator to Copy Contents from one array to another
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


// Destructuring Assignment to Exact Values from Objects
const HIGH_TEMPERATURES_ONE = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line - setting two new constants from objects values 
  
  const {today, tomorrow} = HIGH_TEMPERATURES_ONE
  
  // Only change code above this line


// Use Destructuring Assignment to Assign Variables from Objects - 
//Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES_TWO = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const { today: highToday, tomorrow: highTomorrow } =  HIGH_TEMPERATURES_TWO;
  
  // Only change code above this line
  console.log(highToday, highTomorrow, HIGH_TEMPERATURES_TWO.today); //77 80 77

// Use Destructuring Assignment to Assign Variables from Nested Objects
// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  const { today: {low:lowToday1, high:highToday1 } }  = LOCAL_FORECAST;
  // Only change code above this line
  console.log(lowToday1, highToday1);


// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() 
// so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [i, z, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr_1 = removeFirstTwo(source);
console.log(arr_1)


//Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  //const half = (stats) => (stats.max + stats.min) / 2.0;
  const half = ({ max, min }) => (max + min) / 2.0;
  
  // Only change code above this line
  console.log(half(stats)) //28.015



  
