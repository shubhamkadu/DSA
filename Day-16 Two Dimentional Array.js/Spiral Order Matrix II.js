```
Problem Description

Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.



Problem Constraints

1 <= A <= 1000



Input Format

First and only argument is integer A


Output Format

Return a 2-D matrix which consists of the elements added in spiral order.



Example Input

Input 1:

1
Input 2:

2
Input 3:

5


Example Output

Output 1:

[ [1] ]
Output 2:

[ [1, 2], 
  [4, 3] ]
Output 3:

[ [1,   2,  3,  4, 5], 
  [16, 17, 18, 19, 6], 
  [15, 24, 25, 20, 7], 
  [14, 23, 22, 21, 8], 
  [13, 12, 11, 10, 9] ]


Example Explanation

Explanation 1:

Only 1 is to be arranged.
Explanation 2:

1 --> 2
      |
      |
4<--- 3
Explanation 3:





Expected Output
```;

module.exports = {
  //param A : integer
  //return a array of array of integers
  generateMatrix: function (A) {
    A = Array.from({ length: A }, () => new Array(A).fill(0));
    let n = A.length;
    let element = 1;
    let loop = n - 1;
    let i = 0;
    let j = 0;
    while (loop > 0) {
      for (let k = 0; k < loop; k++) {
        A[i][j] = element;
        element++;
        j++;
      } 
      for (let k = 0; k < loop; k++) {
        A[i][j] = element;
        element++;
        i++;
      }
      for (let k = 0; k < loop; k++) {
        A[i][j] = element;
        element++;
        j--;
      }
      for (let k = 0; k < loop; k++) {
        A[i][j] = element;
        element++;
        i--;
      }

      i++;
      j++;
      loop -= 2;
    }
    if (n % 2 !== 0) {
      A[Math.floor(n / 2)][Math.floor(n / 2)] = element;
    }

    return A;
  },
};
