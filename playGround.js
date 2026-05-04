module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A) {
    let first = A[0]
    let result = ""
    
    for(let i=0;i<first.length;i++){
      let char = first[i]
      for(let j = 1;j<A.length;j++){
        if(A[j][i] !==char){
          return result
        }
      }
      result +=char
    }
    return result
  },
};
A = ["a", "aefghijk", "abcefgh"];

console.log(module.exports.solve(A));
