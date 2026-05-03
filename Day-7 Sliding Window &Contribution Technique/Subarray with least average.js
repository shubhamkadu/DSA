```
Problem Description

Given an array A of size N, find the subarray of size B with the least average.



Problem Constraints

1 <= B <= N <= 105
-105 <= A[i] <= 105


Input Format

First argument contains an array A of integers of size N.
Second argument contains integer B.


Output Format

Return the index of the first element of the subarray of size B that has least average.
Array indexing starts from 0.


Example Input

Input 1:
A = [3, 7, 90, 20, 10, 50, 40]
B = 3
Input 2:

A = [3, 7, 5, 20, -10, 0, 12]
B = 2






Example Output

Output 1:
3
Output 2:

4






Example Explanation

Explanation 1:
Subarray between indexes 3 and 5
The subarray {20, 10, 50} has the least average 
among all subarrays of size 3.
Explanation 2:

 Subarray between [4, 5] has minimum average






```;

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  maxSubarray: function (A, B) {
    //Because B is fixed we just need the sum

    let windowSum = 0;

    for (let i = 0; i <= B; i++) {
      windowSum += A[i];
    }
    let minsum = windowSum;
    let indexans = 0;
    let i = 0;
    let j = B;

    while (j < A.length) {
      windowSum = windowSum - A[i] + A[j];
      if (windowSum < minsum) {
        minsum = windowSum;
        indexans = i + 1;
      }
      i++;
      j++;
    }
    return indexans;
  },
};
A = [3, 7, 90, 20, 10, 50, 40];
B = 3;

console.log(module.exports.maxSubarray(A, B));
