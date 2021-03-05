// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
  if (n <= 0) {
    return 0;
  }
  let cache = [0, 1, 2];
  function rec(n) {
    if (n < cache.length) {
      return cache[n];
    }
    let res = rec(n-1) + rec(n-2);
    cache.push(res);
    return res;
  }
  return rec(n);
}

console.log(climbStairs(5));