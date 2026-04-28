```
Problem Description

Given a knapsack weight A and a set of items with certain value B[i] and weight C[i], we need to calculate maximum amount that could fit in this quantity.

This is different from classical Knapsack problem, here we are allowed to use unlimited number of instances of an item.



Problem Constraints

1 <= A <= 1000

1 <= |B| <= 1000

1 <= B[i] <= 1000

1 <= C[i] <= 1000



Input Format

First argument is the Weight of knapsack A

Second argument is the vector of values B

Third argument is the vector of weights C



Output Format

Return the maximum value that fills the knapsack completely



Example Input

Input 1:

A = 10
B = [5]
C = [10]
Input 2:

A = 10
B = [6, 7]
C = [5, 5]


Example Output

Output 1:

 5
Output 2:

14


Example Explanation

Explanation 1:

Only valid possibility is to take the given item.
Explanation 2:

Take the second item twice.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
```;


module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    // A = capacity
    // B = values
    // C = weights
    let n = B.length;
    let dp = new Array(A + 1).fill(0);

    for (let i = 0; i < n; i++) {
      let value = B[i];
      let wieght = C[i];

      for (let w = wieght; w <= A; w++) {
        dp[w] = Math.max(dp[w], value + dp[w - wieght]);
      }
    }

    return dp[A];
  },
};
