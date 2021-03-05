// Using closure in JS

function addCache() {
  const cache = {};
  return function(n1, n2) {
    if ((n1, n2) in cache) {
      return cache[(n1, n2)];
    }
    console.log("Calculating: ", n1, "+", n2);
    const result = n1 + n2;
    cache[(n1, n2)] = result;
    return result
  }
}

const fAdd = addCache()
console.log(fAdd(3,4))
console.log(fAdd(3,4))
console.log(fAdd(5,6))
console.log(fAdd(5,6))
console.log(fAdd(5,6))