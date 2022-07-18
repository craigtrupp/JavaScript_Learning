// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Sort then loop from sorted array min/max type index (<= to be inclusive for last value)
function sumAll(arr) {
    let arr_sort = arr.sort((a, b) => a < b ? -1 : 1);
    let summedTotal = 0
    for(let i = arr_sort[0]; i <= arr_sort[1]; i++){
      summedTotal += i;
    }
    return summedTotal;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([10, 4]));