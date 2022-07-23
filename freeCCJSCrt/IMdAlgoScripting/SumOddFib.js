// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    if(num == 1) return 1;
  
    let fibSeq = [1, 1];
    let sumValue;
    while((sumValue = fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1]) <= num){
     fibSeq.push(sumValue)  
    }
    // while((sumValue = fibSeq[0] + fibSeq[1]) <= num){
    //   fibSeq.unshift(sumValue);
    // }
    return fibSeq 
      .filter(element => element % 2 != 0)
      .reduce((prev, cur) => prev + cur);
  }
  
  console.log(sumFibs(4));
  console.log(sumFibs(4000000));
  console.log(sumFibs(1));

// 5
// 4613732
// 1