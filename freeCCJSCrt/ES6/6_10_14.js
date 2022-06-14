// Use template literal syntax with backticks to create an array of list element (li) strings. 
// Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. 
// The makeList function should return the array of list item strings.
// Use an iterator method (any kind of loop) to get the desired output (shown below).
//Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    arr.forEach(element => failureItems.push(`<li class="text-warning">${element}</li>`));
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);


//Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // Only change code above this line
  };
  // Below line would assign passed variables to a key/pair value
  const createPerson_1 = (name, age, gender) => ({name,age,gender});



// Write Concise Declarative Functions with ES6
// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
// const bicycle = {
//     gear: 2,
//     setGear: function(newGear) {
//         this.gear = newGear;
//     }
// };
// Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);

// Refactor
const bicycle = {
    gear : 2,
    setGear(newGear){
        this.gear = newGear;
    }
};
bicycle.setGear(15)
console.log(bicycle.gear);