function sumPrimes(num) {
    let allPrimes = [];
    function isPrime(n){
      if(n == 1 || n == 0) return false;
      for(var i = 2; i < n; i++){
        console.log(i, n);
        if(n % i == 0) return false;
      }
      return true;
    }
    for(let m = 1; m <= num; m++){
      if(isPrime(m)){
        allPrimes.push(m);
      }
    }
    return allPrimes
    .reduce((cur, last) => cur + last);
  }
  
  console.log(sumPrimes(10));
// 2 3
// 2 4
// 2 5
// 3 5
// 4 5
// 2 6
// 2 7
// 3 7
// 4 7
// 5 7
// 6 7
// 2 8
// 2 9
// 3 9
// 2 10
// [ 2, 3, 5, 7 ]

// as the range (what m is looping up and through m <= num) should the increnemnting number be divisible by i (running number from 2 up and to passed number (isPrime(M) - loop) )
// the helpfer function isPrime (will return false and the function call will finish and be inovked with the next range number - m which is looping through the provided number to sumPrimes)