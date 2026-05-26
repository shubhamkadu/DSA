module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer

  solve: function (A) {
    let start = 0;
    let end = A.length - 1;
    let ans = 0;
    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);

      if (
        mid == 0 ||
        mid == A.length - 1 ||
        (A[mid] !== A[mid - 1] && A[mid] !== A[mid + 1])
      )
        return mid;

      if (A[mid] == A[mid - 1]) {
        if ((mid - 1) % 2 == 0) {
          start = mid + 1;
          ans = mid;
        } else {
          end = mid - 2;
        }
      } else {
        if (mid % 2 == 0) {
          start = mid + 2;
        } else {
          end = mid - 1;
        }
      }
    }
  },
};

A = [1,1,2,2,4,4,5,5,3,6,6,7,7];


console.log(module.exports.solve(A));
