module.exports = {
  //param A : intiger array
  //return an integer
  solve: function (A) {

    console.log(A.length)

    for(let i = 0;i<A.length;i++){
      console.log(A[i])
    }
    
  },
};
A = [1,2,3,4,5];
console.log(module.exports.solve(A));
