module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A) {
    let start= 1
    let end = A
    let ans = 0
    while(start<=end){
      let mid = start+Math.floor((end-start)/2)
      if(mid*mid<A){
        ans = mid
        start = mid+1
      }else if(mid*mid>A){
        end= mid-1
      }else{
        return mid
      }
    }
    return ans
  },
};


A = 24;

console.log(module.exports.solve(A));
