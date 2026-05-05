// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
let A = 13;
if (A === 1) return 1;
let memo = new Array(A + 1).fill(-1);
function countMinPerfSquares(n) {
  let INT_MAX = Number.MAX_SAFE_INTEGER;

  if (n == 0) return 0;
  if (memo[n] !== -1) return memo[n];
  let ans = INT_MAX;
  let i = 1;

  while (i * i <= n) {
    ans = Math.min(ans, 1 + countMinPerfSquares(n - i * i));
    i++;
  }
  memo[n] = ans;
  return memo[n];
}
console.log(countMinPerfSquares(A));
