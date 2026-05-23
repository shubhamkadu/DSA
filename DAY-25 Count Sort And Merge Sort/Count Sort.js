```
Q4. Count Sort
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given an array A. Sort this array using Count Sort Algorithm and return the sorted array.


Problem Constraints

1 <= |A| <= 105
1 <= A[i] <= 105


Input Format

The first argument is an integer array A.


Output Format

Return an integer array that is the sorted array A.


Example Input

Input 1:
A = [1, 3, 1]
Input 2:
A = [4, 2, 1, 3]


Example Output

Output 1:
[1, 1, 3]
Output 2:
[1, 2, 3, 4]


Example Explanation

For Input 1:
The array in sorted order is [1, 1, 3].
For Input 2:
The array in sorted order is [1, 2, 3, 4].


```;

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    function maxLength(arr) {
      let max = 0;
      for (let i = 0; i < A.length; i++) {
        if (arr[i] > max) max = arr[i];
      }
      return max;
    }

    let maxlen = maxLength(A);
    maxlen = Number(maxlen);
    let freArr = new Array(maxlen + 1).fill(0);

    for (let i = 0; i < A.length; i++) {
      freArr[A[i]]++;
    }

    let idx = 0;
    for (let i = 0; i < freArr.length; i++) {
      let f = freArr[i];
      for (let k = 0; k < f; k++) {
        A[idx] = i;
        idx++;
      }
    }
    return A;
  },
};
