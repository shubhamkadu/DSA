```
Problem Description

Given an array A of length N. Also given are integers B and C.

Return 1 if there exists a subarray with length B having sum C and 0 otherwise



Problem Constraints

1 <= N <= 105

1 <= A[i] <= 104

1 <= B <= N

1 <= C <= 109



Input Format

First argument A is an array of integers.

The remaining arguments B and C are integers



Output Format

Return 1 if such a subarray exist and 0 otherwise


Example Input

Input 1:


A = [4, 3, 2, 6, 1]
B = 3
C = 11
Input 2:

A = [4, 2, 2, 5, 1]
B = 4
C = 6




Example Output

Output 1:
1
Output 2:

0


Example Explanation

Explanation 1:


The subarray [3, 2, 6] is of length 3 and sum 11.


Explanation 2:


There are no such subarray.

Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases

```;

module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let ans = 0;
    let sum = 0;
    let N = A.length;

    for (let i = 0; i <= B - 1; i++) {
      sum += Number(A[i]);
    }

    if (sum === C) {
      return 1;
    }

    let s = 0;
    let e = B;
    while (e <= N - 1) {
      sum = sum + Number(A[e]) - Number(A[s]);
      if (sum === C) {
        return 1;
      }
      s++;
      e++;
    }
    return 0;
  },
};
