module.exports = {
  //param A : intiger array
  //return an integer
  solve: function (A) {
    let ans = []
    a1 = A[0][0]
    b1 = A[0][1]
    for(let i = 0;i<A.length;i++){
      [a2,b2] =[A[i][0],A[i][1]]
      if(a2>b1){
        ans.push([a1,b1])  
        a1 = a2
        b1 = b2
      }else{
        a1 = Math.min(a1,a2)
        b1 = Math.max(b1,b2)
      }
    }
    ans.push([a1,b1])
    return ans
  },
};
A = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(module.exports.solve(A));
