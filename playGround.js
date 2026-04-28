module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  maxSubarray: function (A, B) {
    let sum = 0
    let l = 0
    let count = 0
    for(let r =0;r<A.length;r++){
      sum += A[r]

      while(sum>=B && l<=r){
        sum -=A[l]
        l++
      }
      count +=(r-l+1)
    }
    return count

  },
};
A = [2, 5, 6];
B = 10;

console.log(module.exports.maxSubarray(A, B));
