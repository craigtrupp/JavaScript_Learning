// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    var ret = [];
      for(var i = 0; i < arr.length; i++) {
          if(Array.isArray(arr[i])) {
              ret = ret.concat(steamrollArray(arr[i]));
          } else {
              ret.push(arr[i]);
          }
      }
      return ret;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));