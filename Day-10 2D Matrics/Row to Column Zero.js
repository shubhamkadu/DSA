```
Problem Description

You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.



Problem Constraints

1 <= A.size() <= 103

1 <= A[i].size() <= 103

0 <= A[i][j] <= 103



Input Format

First argument is a 2D integer matrix A.



Output Format

Return a 2D matrix after doing required operations.



Example Input

Input 1:

[1,2,3,4]
[5,6,7,0]
[9,2,0,4]


Example Output

Output 1:

[1,2,0,0]
[0,0,0,0]
[0,0,0,0]


Example Explanation

Explanation 1:

A[2][4] = A[3][3] = 0, so make 2nd row, 3rd row, 3rd column and 4th column zero.

```;

module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    let rows = A.length;
    let col = A[0].length;
    let rowToZero = new Array(rows).fill(false);
    let colToZero = new Array(col).fill(false);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < col; j++) {
        if (A[i][j] == 0) {
          rowToZero[i] = true;
          colToZero[j] = true;
        }
      }
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < col; j++) {
        if (rowToZero[i] || colToZero[j]) {
          A[i][j] = 0;
        }
      }
    }

    return A;
  },
};


