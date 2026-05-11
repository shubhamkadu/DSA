```
Problem Description

Write a function that takes an integer and returns the number of 1 bits present in its binary representation.


Problem Constraints

1 <= A <= 109


Input Format

First and only argument contains integer A


Output Format

Return an integer


Example Input

Input 1:
11
Input 2:
6


Example Output

Output 1:
3
Output 2:
2


Example Explanation

Explaination 1:
11 is represented as 1011 in binary.
Explaination 2:
6 is represented as 110 in binary.

```;
module.exports = {
  //param A : integer
  //return an integer
  numSetBits: function (A) {
    function checkSetBit(n, k) {
      let val = n & (1 << k); //  or we do like this (1*2**k)
      if (val == 0) {
        return false;
      }
      return true;
    }
    let count = 0;
    for (let i = 0; i < 32; i++) {
      if (checkSetBit(A, i)) {
        count++;
      }
    }
    return count;
  },
};
