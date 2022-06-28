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

//Use the class keyword and write a constructor to create the Vegetable class
class Vegetable{
    constructor(name){
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'



//   Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
//   In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
//   Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius. 
//   Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
//   This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
//   In other words, you are abstracting implementation details from the user.

class Thermostat{
    constructor(fahrenheit){
      this._fahrenheit = fahrenheit;
    }
    // getter
    get temperature(){
      return (5/9) * (this._fahrenheit - 32);
    }
    set temperature(celsius){
      this._fahrenheit = (celsius * 9) / 5 + 32;
    }
  }
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  console.log(thermos.temperature);
  console.log(`The let variable when class initially set : ${temp}`);
  thermos.temperature = 26;
  console.log(`The let variable after temperature is set : ${temp}`);
  console.log(`${thermos.temperature} value after being set that is not reflecting of let value`);
  temp = thermos.temperature; // 26 in Celsius
  console.log('temp value is reassigned the reset temperature value of the object instance')
  console.log(`The let variable temp is now : ${temp}`);


// Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. 
// Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not receive
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
        
    if(responseFromServer) {
        resolve('We got the data');
    } else {  
        reject('Data not received')
    }
});

const makeServerRequest_then = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer_then = true;
      
    if(responseFromServer_then) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest_then.then(result => {
    console.log(result);
  });

  
  const makeServerRequest_catch = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer_catch = false;
      
    if(responseFromServer_catch) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest_catch.then(result => {
    console.log(result);
  });
  
  makeServerRequest_catch.catch(error => {
    console.log(error);
  });
