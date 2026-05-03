```
Problem Description

You are given an array A of N elements. Find the number of triplets i,j and k such that i<j<k and A[i]<A[j]<A[k]


Problem Constraints

1 <= N <= 103
1 <= A[i] <= 109


Input Format

First argument A is an array of integers.


Output Format

Return an integer.


Example Input

Input 1:
A = [1, 2, 4, 3]
Input 2:
A = [2, 1, 2, 3]


Example Output

Output 1:
2
Output 2:
1


Example Explanation

For Input 1:
The triplets that satisfy the conditions are [1, 2, 3] and [1, 2, 4].
For Input 2:
 
The triplet that satisfy the conditions is [1, 2, 3].


```;

module.exports = {
  matrics: function (A) {
    let N = A.length;
    let prefixSmall = new Array(N).fill(0);
    let suffixGreater = new Array(N).fill(0);

    // build prefixSmall
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < j; i++) {
        if (A[i] < A[j]) {
          prefixSmall[j]++;
        }
      }
    }

    // build suffixGreater
    for (let j = 0; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        if (A[k] > A[j]) {
          suffixGreater[j]++;
        }
      }
    }

    // calculate answer
    let count = 0;
    for (let j = 1; j < N - 1; j++) {
      count += prefixSmall[j] * suffixGreater[j];
    }

    return count;
  },
};

A = [1, 2, 4, 3];
console.log(module.exports.matrics(A));