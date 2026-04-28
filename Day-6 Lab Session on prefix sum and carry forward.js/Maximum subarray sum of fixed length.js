```
Problem Description

Given an array A of length N, Find the maximum subarray sum out of all possible subarray of length B.


Problem Constraints

1 <= N <= 105
1 <= A[i] <= 106


Input Format

First argument A is an array of integers.
Second argument B is length of subarray.


Output Format

Return a single integer i.e. max subarray sum


Example Input

Input 1:

A = [6, 7, 8, 2]
B = 2
Input 2:

A = [3, 9, 5, 6, 5, 11]
B = 3


Example Output

Output 1:

15
Output 2:

22


Example Explanation

Explanation 1:

Subarray with maximum sum is [7, 8] with sum 15.
Explanation 2:

Subarray with maximum sum is [6, 5, 11] with sum 22.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
```;

module.exports = {
  //param A : array of integers
  //param B : integer
  //return a long integers
  solve: function (A, B) {
    let ans = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let N = A.length;
    for (let i = 0; i <= B - 1; i++) {
      sum += A[i];
    }
    ans = ans < sum ? sum : ans;

    let s = 1;
    let e = B;
    while (e <= N - 1) {
      sum = sum + A[e] - A[s - 1];
      ans = ans < sum ? sum : ans;
      s++;
      e++;
    }
    return ans;
  },
};
