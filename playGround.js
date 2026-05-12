module.exports = {
  //param A : intiger array
  //return an integer
  solve: function (A) {
    for (let i = 0; i < A.length; i++) {
      console.log(A[i]);
    }
  },
};
A = "010";
console.log(module.exports.solve(A));
