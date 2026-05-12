```
Problem Description

You are given a binary array A of length N where each element is either 0 or 1.

Your task is to count the number of subarrays where the bitwise OR of all the elements in the subarray is 1.


Problem Constraints

1 <= N <= 104
A[i] is either 0 or 1


Input Format

The First and the only argument is an Integer Array where each element is either 0 or 1.


Output Format

Return a single Integer representing the number of subarrays where the bitwise OR is 1


Example Input

Input 1:
A = [0, 0, 1, 1, 0]
Input 2:
A = [0, 0, 0]


Example Output

Output 1:
11
Output 2:
0


Example Explanation

Explanation 1:
The only subarrays with OR = 1 are
[0, 0, 1], [0, 0, 1, 1], [1], [1], [1, 1], [1, 0], [1, 1, 0], [0, 0, 1, 1, 0], [0, 1], [0, 1, 1], [0, 1, 1, 0] 
Explanation 2:
There is no subarray, whose bitwise OR is 0.


```;

module.exports = {
  //param A : array of integers
  //return an integer
  subarraysWithOR1: function (A) {
    let ans = 0;
    let zero = 0;
    let N = A.length;
    let total = (N * (N + 1)) / 2;
    for (let i = 0; i < A.length; i++) {
      if (A[i] == 0) {
        zero++;
      } else {
        ans += (zero * (zero + 1)) / 2;
        zero = 0;
      }
    }
    ans += (zero * (zero + 1)) / 2;
    return total - ans;
  },
};
