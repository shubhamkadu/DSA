```
Problem Description

Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints

1 <= N <= 105
-105 <= A[i] <= 105
Sum of all elements of A <= 109


Input Format

First argument contains an array A of integers of size N


Output Format

Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input

Input 1:
A = [2, 1, 6, 4]
Input 2:

A = [1, 1, 1]






Example Output

Output 1:
1
Output 2:

3






Example Explanation

Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.





```;

module.exports = {
  // param A: array of integers
  // return an integer
  solve: function (A) {
    const N = A.length;
    const prefixEven = new Array(N).fill(0);
    const prefixOdd = new Array(N).fill(0);

    // Build prefix sums
    prefixEven[0] = A[0];
    for (let i = 1; i < N; i++) {
      prefixEven[i] = prefixEven[i - 1];
      prefixOdd[i] = prefixOdd[i - 1];
      if (i % 2 === 0) {
        prefixEven[i] += A[i];
      } else {
        prefixOdd[i] += A[i];
      }
    }

    let count = 0;

    for (let i = 0; i < N; i++) {
      // Total sums before index i
      const evenLeft = i > 0 ? prefixEven[i - 1] : 0;
      const oddLeft = i > 0 ? prefixOdd[i - 1] : 0;

      // Total sums after index i (shift happens)
      const evenRight = prefixOdd[N - 1] - prefixOdd[i];
      const oddRight = prefixEven[N - 1] - prefixEven[i];

      const totalEven = evenLeft + evenRight;
      const totalOdd = oddLeft + oddRight;

      if (totalEven === totalOdd) {
        count++;
      }
    }

    return count;
  },
};
