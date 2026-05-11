```
Problem Description

Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



Problem Constraints

1 <= |A| <= 2000000

0 <= A[i] <= INTMAX



Input Format

The first and only argument of input contains an integer array A.



Output Format

Return a single integer denoting the single element.



Example Input

Input 1:

 A = [1, 2, 2, 3, 1]
Input 2:

 A = [1, 2, 2]


Example Output

Output 1:

 3
Output 2:

 1


Example Explanation

Explanation 1:

3 occurs once.
Explanation 2:

1 occurs once.

```;

module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
      let ones = 0;
      let zeros = 0;
      for (let j = 0; j < A.length; j++) {
        let val = BigInt(A[j]) & BigInt(1 << i);
        if (val == 0) {
          zeros++;
        } else {
          ones++;
        }
      }
      if (ones % 2 !== 0) {
        ans += Math.pow(2, i);
      }
    }
    return ans;
  },
};
