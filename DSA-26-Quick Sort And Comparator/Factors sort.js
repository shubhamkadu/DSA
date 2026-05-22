```
Problem Description

You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.

Note: You cannot use any extra space


Problem Constraints

1 <= N <= 104
1 <= A[i] <= 104


Input Format

First argument A is an array of integers.


Output Format

Return an array of integers.


Example Input

Input 1:
A = [6, 8, 9]
Input 2:
A = [2, 4, 7]


Example Output

Output 1:
[9, 6, 8]
Output 2:
[2, 7, 4]


Example Explanation

For Input 1:
The number 9 has 3 factors, 6 has 4 factors and 8 has 4 factors.
For Input 2:
The number 2 has 2 factors, 7 has 2 factors and 4 has 3 factors.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
```;

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    function countFactor(num) {
      let count = 0;

      for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
          if (i === num / i) {
            count += 1;
          } else {
            count += 2;
          }
        }
      }

      return count;
    }

    A.sort((a, b) => {
      let factorA = countFactor(a);
      let factorB = countFactor(b);

      if (factorA < factorB) {
        return -1;
      } else if (factorA > factorB) {
        return 1;
      } else {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    return A;
  },
};

// time complexity: O(N * sqrt(max(A[i])) + N log N) where N is the number of elements in the array and max(A[i]) is the maximum element in the array. The first part of the time complexity is for counting factors for each element, and the second part is for sorting the array based on the custom comparator.
// space complexity: O(1) as we are sorting the array in place and not using any extra space.