```
Problem Description

Given a sorted array of integers A (0-indexed) of size N, find the left most and the right most index of a given integer B in the array A.

Return an array of size 2, such that 
          First element = Left most index of B in A
          Second element = Right most index of B in A.
If B is not found in A, return [-1, -1].

Note : Note: The time complexity of your algorithm must be O(log n)..


Problem Constraints

1 <= N <= 106
1 <= A[i], B <= 109


Input Format

The first argument given is the integer array A.
The second argument given is the integer B.


Output Format

Return the left most and right most index (0-based) of B in A as a 2-element array. If B is not found in A, return [-1, -1].


Example Input

Input 1:

 A = [5, 7, 7, 8, 8, 10]
 B = 8
Input 2:

 A = [5, 17, 100, 111]
 B = 3


Example Output

Output 1:

 [3, 4]
Output 2:

 [-1, -1]


Example Explanation

Explanation 1:

 The first occurrence of 8 in A is at index 3.
 The last occurrence of 8 in A is at index 4.
 ans = [3, 4]
Explanation 2:

 There is no occurrence of 3 in the array.
```;

module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let startPoint = -1;
    let endPoint = -1;

    function firstIndex() {
      let start = 0;
      let end = A.length - 1;
      while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (A[mid] < B) {
          start = mid + 1;
        } else if (A[mid] > B) {
          end = mid - 1;
        } else {
          startPoint = mid;
          end = mid - 1;
        }
      }
    }

    function lastIndex() {
      let start = 0;
      let end = A.length - 1;
      while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (A[mid] < B) {
          start = mid + 1;
        } else if (A[mid] > B) {
          end = mid - 1;
        } else {
          endPoint = mid;
          start = mid + 1;
        }
      }
    }
    firstIndex();
    lastIndex();
    return [startPoint, endPoint];
  },
};

A = [5, 7, 7, 8, 8, 10];
B = 8;

console.log(module.exports.solve(A, B));

// time complexity: O(log n)
// space complexity: O(1)
