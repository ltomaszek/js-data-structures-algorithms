// Difference between dynamic programming and not storing subresults

/**
 * No dynamic programming
 */
function slowFibonacci(num) {
  operations++;
  if (num == 0) return 0;
  else if (num == 1) return 1;
  return slowFibonacci(num-1) + slowFibonacci(num-2);
}

/**
 * Using dynamic programming + closure
 */
function fastFibonacci() {
  const cache = [0, 1];

  function fibRec(num) {
    operations++;
    if (num < cache.length) {
      //console.log("Found", n);
      return cache[num];
    }
    //console.log("Not found", n);
    cache.push(fibRec(num-1) + fibRec(num-2));
    //console.log("Addding to cache:", n);
    return cache[num];
  }

  return fibRec;
}

/**
 * Using dynamic programming + default cache parameter
 */
function fib(n, cache={0: 0, 1: 1}){
    operations++;
    if(n in cache){
      return cache[n]
    } else {
      cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
      return cache[n]
    }
}

function computationInfo(fibType, func) {
  operations = 0;
  console.log(fibType);
  console.log("result:", func(testingNum));
  console.log("operations:", operations);
  console.log()
}

let operations = 0
let testingNum = 15;

console.log("Testing number:", testingNum);
console.log();

computationInfo("Slow Fibonacci:", slowFibonacci)
const fibF = fastFibonacci();
computationInfo("Fast Fibonacci (closure)", fibF)
computationInfo("Fast Fibonacci (closure) AGAIN", fibF)
computationInfo("Fast Fibonacci (default cache)", fib)