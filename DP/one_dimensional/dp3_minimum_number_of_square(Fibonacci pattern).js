```
Problem Description

Given an integer A. Return minimum count of numbers, sum of whose squares is equal to A.



Problem Constraints

1 <= A <= 105



Input Format

First and only argument is an integer A.



Output Format

Return an integer denoting the minimum count.



Example Input

Input 1:

 A = 6
Input 2:

 A = 5


Example Output

Output 1:

 3
Output 2:

 2


Example Explanation

Explanation 1:

 Possible combinations are : (12 + 12 + 12 + 12 + 12 + 12) and (12 + 12 + 22).
 Minimum count of numbers, sum of whose squares is 6 is 3. 
Explanation 2:

 We can represent 5 using only 2 numbers i.e. 12 + 22 = 5
```

module.exports = {
  //param A : integer
  //return an integer
  countMinSquares: function (A) {
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
      return ans;
    }
    return countMinPerfSquares(A);
  },
};


// Another way

module.exports = {
  //param A : integer
  //return an integer
  countMinSquares: function (A) {
    if (A === 1) return 1;
    let dp = new Array(A + 1).fill(Number.POSITIVE_INFINITY);
    dp[0] = 0;

    for (let i = 1; i <= A; i++) {
      for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
      }
    }
    return dp[A];
  },
};

