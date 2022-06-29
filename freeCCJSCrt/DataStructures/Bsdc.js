// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
// The function is supposed to return a new array made up of num copies of arr. Modify the function using spread syntax so that it works correctly 
// (hint: another method we have already covered might come in handy here!). : Copy an Array with the Spread Operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));


// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments.
// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not. : Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) != -1 ? true : false; // check if index return is positive (negative value checks returns -1 : if not return true else return false)
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. 
// elem represents an element that may or may not be present on one or more of the arrays nested within arr. 
// Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line - only outer level required to be iterated through for a search at the nested level of the index, if not found (== -1) push that nested arrray into the returned array
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) == -1){
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



// We have defined a variable, myNestedArray, set equal to an array. 
// Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth 
// (remember, the outer-most array is level 1). 
// Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest. : multi-dimensional array
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method' ],
  ['concat', false, true, 'spread', 'array', ['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
  // Only change code above this line
];


//Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object. : Delete Keyword Property
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
['oranges', 'plums', 'strawberries'].forEach(e => delete foods[e])
// Only change code above this line

console.log(foods);


// Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
let users_1 = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise. : Check if an Object Has a Property
function isEveryoneHere(userObj) {
  // Only change code below this line
  if('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj){
    return true;
  }
  return false
  // Only change code above this line
}

console.log(isEveryoneHere(users_1));



// We've defined a function countOnline which accepts one argument (a users object). 
// Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true.
// An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value. : Iterate with a For ..in for keys over a object 
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

// count online users and push object of username and their online status (could just default to true off condition but where's the fun in that)
// 
function countOnline(usersObj) {
  // Only change code below this line
  let online_users = []
  for(let user in usersObj){
    if(usersObj[user].hasOwnProperty('online') && usersObj[user].online == true){
      //online_users.push(usersObj[user], user);
      online_users.push({user_name:user, online:usersObj[user].online});
    }
  }
  return [online_users, online_users.length]
  // Only change code above this line
}

console.log(countOnline(users));



// Take a look at the object we've provided in the code editor. The user object contains three keys. 
// The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. 
// We've started writing a function addFriend. 
// Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

let user_2 = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj['data']['friends'].push(friend);
  return userObj['data']['friends'];
  // Only change code above this line
}

console.log(addFriend(user_2, 'Pete'));