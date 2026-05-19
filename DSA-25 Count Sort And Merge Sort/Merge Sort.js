```
Problem Description

Given an integer array A, sort the array using Merge Sort.


Problem Constraints

1 <= |A| <= 105
1 <= A[i] <= 109


Input Format

First argument is an integer array A.


Output Format

Return the sorted array.


Example Input

Input 1:-
A = [1, 4, 10, 2, 1, 5]
Input 2:-
A = [3, 7, 1]


Example Output

Output 1:-
[1, 1, 2, 4, 5, 10]
Output 2:-
[1, 3, 7]


Example Explanation

Explanation 1 and 2:
Return the sorted array.

```;
module.exports = {
  //param A : array of integers
  //return a array of integers

  solve: function (A) {
    let start = 0;
    let end = A.length - 1;

    // Find max manually for BigInt support
    let maxValue = 0n;

    for (let i = 0; i < A.length; i++) {
      if (BigInt(A[i]) > maxValue) {
        maxValue = BigInt(A[i]);
      }
    }

    maxValue = maxValue + 1n;

    function merge(A, start, mid, end) {
      let i = start;
      let j = mid + 1;
      let idx = start;

      while (i <= mid && j <= end) {
        let lv = BigInt(A[i]) % maxValue;
        let rv = BigInt(A[j]) % maxValue;

        if (lv <= rv) {
          A[idx] = BigInt(A[idx]) + lv * maxValue;

          i++;
        } else {
          A[idx] = BigInt(A[idx]) + rv * maxValue;

          j++;
        }

        idx++;
      }

      while (i <= mid) {
        let lv = BigInt(A[i]) % maxValue;

        A[idx] = BigInt(A[idx]) + lv * maxValue;

        i++;
        idx++;
      }

      while (j <= end) {
        let rv = BigInt(A[j]) % maxValue;

        A[idx] = BigInt(A[idx]) + rv * maxValue;

        j++;
        idx++;
      }

      // Decode
      for (let k = start; k <= end; k++) {
        A[k] = BigInt(A[k]) / maxValue;
      }
    }

    function mergeSort(A, start, end) {
      if (start >= end) {
        return;
      }

      let mid = Math.floor((start + end) / 2);

      mergeSort(A, start, mid);

      mergeSort(A, mid + 1, end);

      merge(A, start, mid, end);
    }

    mergeSort(A, start, end);

    return A;
  },
};