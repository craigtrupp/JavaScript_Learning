// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
    let truthy = [];
    for(let property in collection){
      //console.log(collection[property].hasOwnProperty(pre)); check if the collection object (collection[property]) has the provided property in the object with .hasOwnProperty(pre)
      //console.log(collection[property][pre]); would print the value of the property being evaluated in the next line
      if(collection[property][pre]){
        // check if truthy and add to array if so
        truthy.push(true);
      } 
    }
    return truthy.length == collection.length ? true : false;
    // return overall true/false value after all collection's passed properties have been evaluted for truthyness with length evaluation of provided collection length against truthy length
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));

// false
// true
  
  