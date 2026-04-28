```
Problem Description

Given two integer arrays A and B of size N each which represent values and weights associated with N items respectively.

Also given an integer C which represents knapsack capacity.

Find out the maximum value subset of A such that sum of the weights of this subset is smaller than or equal to C.

NOTE:

You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).


Problem Constraints

1 <= N <= 103

1 <= C <= 103

1 <= A[i], B[i] <= 103



Input Format

First argument is an integer array A of size N denoting the values on N items.

Second argument is an integer array B of size N denoting the weights on N items.

Third argument is an integer C denoting the knapsack capacity.



Output Format

Return a single integer denoting the maximum value subset of A such that sum of the weights of this subset is smaller than or equal to C.



Example Input

Input 1:

 A = [60, 100, 120]
 B = [10, 20, 30]
 C = 50
Input 2:

 A = [10, 20, 30, 40]
 B = [12, 13, 15, 19]
 C = 10


Example Output

Output 1:

 220
Output 2:

 0


Example Explanation

Explanation 1:

 Taking items with weight 20 and 30 will give us the maximum value i.e 100 + 120 = 220
Explanation 2:

 Knapsack capacity is 10 but each item has weight greater than 10 so no items can be considered in the knapsack therefore answer is 0.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
```;




module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let n = A.length;
    let dp = new Array(C + 1).fill(0);
    console.log("dp", dp);

    for (let i = 0; i < n; i++) {
      let value = A[i];
      let wieght = B[i];
      console.log("value", value);
      console.log("wieght", wieght);
      for (let w = C; w >= wieght; w--) {
        console.log("w", w);
        console.log("dp", dp);

        console.log("dp[w]", dp[w]);
        dp[w] = Math.max(dp[w], value + dp[w - wieght]);
        console.log("dp[w] after", dp[w]);
      }
    }

    console.log("dp[c]", dp);
    return dp[C];
  },
};

A = [60, 100, 120];
B = [10, 20, 30];
C = 50;
console.log(module.exports.solve(A, B, C));
