```
Problem Description

Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints

1 <= |A| <= 2000



Input Format

First and only argument is vector A



Output Format

Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input

Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output

Output 1:

 2
Output 2:

 3


Example Explanation

Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

 Take the last 3 elements of the array.
```;
module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    function max(arr) {
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return max;
    }

    function min(arr) {
      let min = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
        }
      }
      return min;
    }

    let maxVal = max(A);
    let minVal = min(A);

    let lastMinFound = -1;
    let lastMaxFound = -1;
    let ans = A.length;
    let N = A.length;

    for (i = 0; i < N; i++) {
      if (A[i] == minVal) {
        if (lastMaxFound !== -1) {
          ans = ans > i - lastMaxFound + 1 ? i - lastMaxFound + 1 : ans;
        }
        lastMinFound = i;
      }

      if (A[i] == maxVal) {
        if (lastMinFound !== -1) {
          ans = ans > i - lastMinFound + 1 ? i - lastMinFound + 1 : ans;
        }
        lastMaxFound = i;
      }
    }

    return ans;
  },
};
