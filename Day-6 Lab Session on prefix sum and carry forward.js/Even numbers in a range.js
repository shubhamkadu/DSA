```
Problem Description

You are given an array A of length N and Q queries given by the 2D array B of size Q×2.

Each query consists of two integers B[i][0] and B[i][1].

For every query, your task is to find the count of even numbers in the range from A[B[i][0]] to A[B[i][1]].



Problem Constraints

1 <= N <= 105
1 <= Q <= 105
1 <= A[i] <= 109
0 <= B[i][0] <= B[i][1] < N


Input Format

First argument A is an array of integers.
Second argument B is a 2D array of integers.


Output Format

Return an array of integers.


Example Input

Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0, 2] 
        [2, 4]
        [1, 4]   ]
Input 2:
A = [2, 1, 8, 3, 9, 6]
B = [   [0, 3]
        [3, 5]
        [1, 3] 
        [2, 4]   ]


Example Output

Output 1:
[1, 1, 2]
Output 2:
[2, 1, 1, 1]


Example Explanation

For Input 1:
The subarray for the first query is [1, 2, 3] (index 0 to 2) which contains 1 even number.
The subarray for the second query is [3, 4, 5] (index 2 to 4) which contains 1 even number.
The subarray for the third query is [2, 3, 4, 5] (index 1 to 4) which contains 2 even numbers.
For Input 2:
The subarray for the first query is [2, 1, 8, 3] (index 0 to 3) which contains 2 even numbers.
The subarray for the second query is [3, 9, 6] (index 3 to 5) which contains 1 even number.
The subarray for the third query is [1, 8, 3] (index 1 to 3) which contains 1 even number.
The subarray for the fourth query is [8, 3, 9] (index 2 to 4) which contains 1 even number.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
```;


module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //return a array of integers

  solve: function (A, B) {
    // Precompute prefix sum of even number counts
    let psum = new Array(A.length);
    psum[0] = Number(A[0]) % 2 === 0 ? 1 : 0;

    for (let i = 1; i < A.length; i++) {
      psum[i] = psum[i - 1] + (Number(A[i]) % 2 === 0 ? 1 : 0);
    }

    let result = [];

    for (let i = 0; i < B.length; i++) {
      const [start, end] = B[i];
      const count = start === 0 ? psum[end] : psum[end] - psum[start - 1];
      result.push(count);
    }

    return result;
  },
};
