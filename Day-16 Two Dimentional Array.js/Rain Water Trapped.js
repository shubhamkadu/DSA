```
Problem Description

Imagine a histogram where the bars' heights are given by the array A. Each bar is of uniform width, which is 1 unit. When it rains, water will accumulate in the valleys between the bars.

Your task is to calculate the total amount of water that can be trapped in these valleys.

Example:

The Array A = [5, 4, 1, 4, 3, 2, 7] is visualized as below. The total amount of rain water trapped in A is 11.


Rain Water Trapped




Problem Constraints

1 <= |A| <= 105
0 <= A[i] <= 105



Input Format

First and only argument is the Integer Array, A.



Output Format

Return an Integer, denoting the total amount of water that can be trapped in these valleys



Example Input

Input 1:

 A = [0, 1, 0, 2]
Input 2:

A = [1, 2]


Example Output

Output 1:

1
Output 2:

0


Example Explanation

Explanation 1:

1 unit is trapped on top of the 3rd element.
Rain Water Histogram
Explanation 2:

No water is trapped.



Expected Output
```;

module.exports = {
  //param A : array of integers
  //return an integer
  trap: function (A) {
    let ans = 0;
    let N = A.length;
    let lmax = new Array(N);
    lmax[0] = A[0];

    for (let i = 1; i < N; i++) {
      lmax[i] = Math.max(lmax[i - 1], A[i]);
    }

    let rmax = new Array(N);
    rmax[N - 1] = A[N - 1];

    for (let i = N - 2; i >= 0; i--) {
      rmax[i] = Math.max(rmax[i + 1], A[i]);
    }

    for (let i = 1; i < N - 1; i++) {
      let water = Math.min(rmax[i], lmax[i]) - A[i];
      if (water > 0) {
        ans += water;
      }
    }
    return ans;
  },
};

// time complexity: O(N) and space complexity: O(N)
