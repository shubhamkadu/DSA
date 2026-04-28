```
Given a grid of size n * m, lets assume you are starting at (1,1) and your goal is to reach (n, m). 
At any instance, if you are on (x, y), you can either go to (x, y + 1) or (x + 1, y).

Now consider if some obstacles are added to the grids. 
Return the total number unique paths from (1, 1) to (n, m).

Note: 
1. An obstacle is marked as 1 and empty space is marked 0 respectively in the grid.
2. Given Source Point and Destination points are 1-based index.



Problem Constraints

1 <= n, m <= 100
A[i][j] = 0 or 1


Input Format

Firts and only argument A is a 2D array of size n * m.


Output Format

Return an integer denoting the number of unique paths from (1, 1) to (n, m).


Example Input

Input 1:

 A = [
        [0, 0, 0]
        [0, 1, 0]
        [0, 0, 0]
     ]
Input 2:

 A = [
        [0, 0, 0]
        [1, 1, 1]
        [0, 0, 0]
     ]


Example Output

Output 1:

 2
Output 2:

 0


Example Explanation

Explanation 1:

 Possible paths to reach (n, m): {(1, 1), (1, 2), (1, 3), (2, 3), (3, 3)} and {(1 ,1), (2, 1), (3, 1), (3, 2), (3, 3)}  
 So, the total number of unique paths is 2. 
Explanation 2:

 It is not possible to reach (n, m) from (1, 1). So, ans is 0.
```

module.exports = {
  //param A : array of array of integers
  //return an integer
  adjasent: function (A) {
    let rows = A.length;
    let cols = A[0].length;
    let memo = new Array(rows).fill(0).map(() => new Array(cols).fill(-1));

    function ways(row, col) {
      if (row < 0 || col < 0) return 0;
      if (A[row][col] === 1) return 0;
      if (row === 0 && col === 0) return 1;

      if (memo[row][col] !== -1) {
        return memo[row][col];
      }
      let up = ways(row - 1, col);
      let down = ways(row, col - 1);

      memo[row][col] = up + down;
      return memo[row][col];
    }
    return ways(rows - 1, cols - 1);
  },
};
A = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

console.log(module.exports.adjasent(A));

// Time Complexity => O(N*M) 
// space Comlexity => O(N*M)


// Optimize version
// Time Complexity => O(N*M) =>rows and cols
// space Comlexity => O(M) => number of colums 

module.exports = {
  //param A : array of array of integers
  //return an integer
  adjasent: function (A) {
    let rows = A.length;
    let cols = A[0].length;
    let dp = new Array(rows).fill(0);

    dp[0] = A[0][0] === 1 ? 0 : 1;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        console.log("i,j", i, j);

        if (A[i][j] === 1) {
          dp[j] = 0;
        } else if (j > 0) {
          dp[j] = dp[j] + dp[j - 1];
        }
        console.log("result", dp);
      }
    }

    return dp[cols - 1];
  },
};
A = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

console.log(module.exports.adjasent(A));







