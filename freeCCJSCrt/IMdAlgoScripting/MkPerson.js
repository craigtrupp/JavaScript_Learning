// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fName = firstAndLast.trim();
    this.getFirstName = function(){
      return fName.split(" ")[0];
    };
    this.getLastName = function(){
      return fName.split(" ")[1];
    };
    this.getFullName = function(){
      return fName;
    }
    this.setFirstName = function(first){
      fName = fName.replace(fName.slice(0,fName.indexOf(" ")), first);
    }
    this.setLastName = function(last){
      fName = fName.replace(fName.slice(fName.indexOf(" ") + 1, fName.length), last);
    }
    this.setFullName = function(firstAndLast){
      fName = fName.replace(fName, firstAndLast);
    }
    
  };
  
  const bob = new Person('Bob Ross');
  console.log(bob.getFirstName())
  console.log(bob.getLastName())
  console.log(bob.getFullName());
  bob.setFirstName('Rick');
  console.log(bob.getFirstName());
  bob.setLastName('Rosay');
  console.log(bob.getLastName());
  console.log(bob.getFullName());
  bob.setFullName("Haskell Curry");
  console.log(bob.getFullName());
  
//   Bob
//   Ross
//   Bob Ross
//   Rick
//   Rosay
//   Rick Rosay
//   Haskell Curry  