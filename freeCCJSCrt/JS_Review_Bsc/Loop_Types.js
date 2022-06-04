// Iterate with JavaScript While Loops
const myArrayWhile = [];
let i = 5;
while(i >= 0) {
  myArrayWhile.push(i);
  i--;
}

// Iterate with JavaScript For Loops
const myArrayFor = [];

for(let j = 1; j < 6; j++){
    myArrayFor.push(j);
}

// Push the odd numbers from 1 through 9 to myArray using a for loop.
const myArrayNIterator= [];

for(let m = 1; m < 10; m +=2) {
  myArrayNIterator.push(m);
}


//Count Backwards With a For Loop
const myArrayBack = [];
for(let q = 9; q > 0; q -= 2){
  myArrayBack.push(q)
}
console.log(myArrayBack);


// Iterate Through an Array with a For Loop
const myArrTotal = [2, 3, 4, 5, 6];
let total = 0
for(let i = 0; i < myArrTotal.length; i++){
  total += myArrTotal[i];
}

// Nested Array Search with For Loops
const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        product *= arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// Do While - Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
  const doWhileArr = [];
  let m = 10;
  do {
      doWhileArr.push(m)
      m++;
  } while (m < 11);


//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
  function sum(arr, n) {
    // Only change code below this line
    if(n <= 0){
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n-1];
    }
    // Only change code above this line
  }
  console.log(sum([1], 0))
  console.log(sum([2, 3, 4], 1))


  // Math Flooor - generate Range
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
  }