module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let map = {}
    map[0] = 1
    let result = 0
    let sum = 0
    for(let i = 0;i<A.length;i++){
      sum +=A[i]
      if(map[sum-B]){
        result +=map[sum-B]
      }
      map[sum] = (map[sum]||0)+1

    }
    return result
  },
};

A = [1,0,1]
B = 1
console.log(module.exports.solve(A,B));
