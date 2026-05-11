```
Problem Description

Given an array of integers, every element appears thrice except for one, which occurs once.

Find that element that does not appear thrice.

NOTE: Your algorithm should have a linear runtime complexity.

Could you implement it without using extra memory?




Problem Constraints

2 <= |A| <= 5*106

0 <= A[i] <= INTMAX



Input Format

First and only argument of input contains an integer array A.



Output Format

Return a single integer.



Example Input

Input 1:

 A = [1, 2, 4, 3, 3, 2, 2, 3, 1, 1]
Input 2:

 A = [0, 0, 0, 1]


Example Output

Output 1:

 4
Output 2:

 1


Example Explanation

Explanation 1:

 4 occurs exactly once in Input 1.
 1 occurs exactly once in Input 2.
```;
module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    function checkSetBit(n, k) {
      let val = n & (1 * 2 ** k);
      if (val == 0) {
        return false;
      }
      return true;
    }
    let ans = 0;
    for (let i = 0; i < 32; i++) {
      let zero = 0;
      let one = 0;
      for (let j = 0; j < A.length; j++) {
        if (checkSetBit(A[j], i)) {
          one++;
        } else {
          zero++;
        }
      }
      if (one % 3 !== 0) {
        ans = ans + Math.pow(2, i);
      }
    }

    return ans;
  },
};
