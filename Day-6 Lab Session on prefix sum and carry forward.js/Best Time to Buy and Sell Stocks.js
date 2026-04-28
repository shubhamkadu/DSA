```
Problem Description

Say you have an array, A, for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Return the maximum possible profit.



Problem Constraints

0 <= A.size() <= 700000



1 <= A[i] <= 107





Input Format

The first and the only argument is an array of integers, A.


Output Format

Return an integer, representing the maximum possible profit.


Example Input

Input 1:
A = [1, 2]
Input 2:

A = [1, 4, 5, 2, 4]


Example Output

Output 1:
1
Output 2:

4


Example Explanation

Explanation 1:
Buy the stock on day 0, and sell it on day 1.
Explanation 2:

Buy the stock on day 0, and sell it on day 2.


```;

module.exports = {
  maxProfit: function (A) {
    if (A.length === 0) return 0;

    let n = A.length;
    let prefixMin = new Array(n);

    prefixMin[0] = A[0];

    for (let i = 1; i < n; i++) {
      prefixMin[i] = Math.min(prefixMin[i - 1], A[i]);
    }

    let maxProfit = 0;

    for (let i = 1; i < n; i++) {
      let profit = A[i] - prefixMin[i - 1];
      maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
  },
};

module.exports = {
  //param A : array of integers
  //return an integer
  maxProfit: function (A) {
    if (A.length === 0) return 0;
    let minPrice = A[0];
    let maxProfit = 0;
    for (let i = 1; i < A.length; i++) {
      let profit = A[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
      minPrice = Math.min(minPrice, A[i]);
    }
    return maxProfit;
  },
};
