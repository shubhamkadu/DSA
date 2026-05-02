module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  maxSubarray: function (A) {
    let n = A.length;
    let ans = [];
    for (let start = 0; start < 2 * n - 1; start++) {
      let rows = new Array(n).fill(0);
      let i = 0;
      let j = 0;
      let k = 0;
      if (start < n) {
        i = 0;
        j = start;
      } else {
        i = start - n + 1;
        j = n - 1;
      }

      while (i < n && j >= 0) {
        rows[k] = A[i][j];
        k++
        i++;
        j--;
      }
      ans.push(rows)
    }
    return ans
  },
};
A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(module.exports.maxSubarray(A));
