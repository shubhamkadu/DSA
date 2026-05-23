module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A) {
    let start = 0;
    let n = A.length - 1;
    let end = n;
    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (
        (mid === 0 || A[mid] > A[mid - 1]) &&
        (mid == n || A[mid] > A[mid + 1])
      ) {
        return A[mid];
      } else if (
        (mid === 0 || A[mid] > A[mid - 1]) &&
        (mid == n || A[mid] < A[mid + 1])
      ) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  },
};

A = [5, 17, 100, 11];

console.log(module.exports.solve(A));
