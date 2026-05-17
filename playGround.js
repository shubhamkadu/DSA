module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A) {
    let seen = new Set()
    let r = 0
    let l = 0
    let max = 0
    while(r<A.length){
      if(seen.has(A[r])){
        seen.delete(A[l])
        l++
      }else{
        seen.add(A[r])
        max = Math.max(max,r-l+1)
      }
    }
    return max
  },
};

A = "abcabcbb"
console.log(module.exports.solve(A));
