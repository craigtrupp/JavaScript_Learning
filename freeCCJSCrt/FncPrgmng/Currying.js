// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
// Fill in the body of the add function so it uses currying to add parameters x, y, and z.
function add(x) {
    // Only change code below this line
    return function(y){
      return function(z){
        return x + x + z;
      }
    }
    // Only change code above this line
  }
  add(10)(20)(30);

  // Arrow Functions : calling the add_arrow is in a sense returning nested function calls
  function add_arrow(x){
      return y => z => x + y + z;
  }
  add_arrow(1)(2)(3);