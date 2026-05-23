module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let start = 0
    let end = A.length-1
    console.log(end)
    let ans = 0
    while(start<=end){
      let mid = start+ Math.floor((end-start)/2)

      if(A[mid]>=B){
        ans = mid
        end = mid-1
      }else{
        start = mid+1
      }
    }
    return ans 
  },
};


A = [1, 3, 5, 6];
B = 7; 

console.log(module.exports.solve(A, B));
