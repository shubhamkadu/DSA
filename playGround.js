module.exports = {
  //param A : intiger array
  //return an integer
  solve: function (A) {
    let ans = Number.MIN_SAFE_INTEGER
    let sum = 0
    for(let i = 0;i<A.length;i++){
      sum +=A[i]
      ans = Math.max(ans, sum);
      if (sum < 0) sum = 0;
    }
    return ans
   
  },
};
A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; 
console.log(module.exports.solve(A));
