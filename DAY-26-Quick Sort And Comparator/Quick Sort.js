```
Problem Description

Given an integer array A, sort the array using Quick Sort.


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
    function partition(start, end) {
      function swap(i, j) {
        [A[i], A[j]] = [A[j], A[i]];
      }
      let pivatValue = A[start];
      let left = start + 1;
      let right = end;
      while (left <= right) {
        if (A[left] < pivatValue) {
          left++;
        } else if (A[right] > pivatValue) {
          right--;
        } else {
          swap(left, right);
          left++;
          right--;
        }
      }
      swap(start, right);
      return right;
    }

    function quickSort(start, end) {
      if (start >= end) {
        return;
      }
      let pivatIndex = partition(start, end);
      quickSort(start, pivatIndex - 1);
      quickSort(pivatIndex + 1, end);
    }
    quickSort(0, A.length - 1);
    return A;
  },
};

// time complexity: O(n log n) in average and O(n^2) in worst case
// space complexity: O(log n) in average and O(n) in worst case
