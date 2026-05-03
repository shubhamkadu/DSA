module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  matrics: function (A) {
    let row = A.length
    let col = A[0].length
    let rowZero = new Array(row).fill(false)
    let colZero = new Array(col).fill(false)
    
    for (let i = 0; i <A.length; i++) {
      for(let j = 0;j<A[0].length;j++){
        if(A[i][j] ==0){
          rowZero[i] = true
          colZero[j] = true
        }
      }
    }
    
    for (let i = 0; i <A.length; i++) {
      for(let j = 0;j<A[0].length;j++){
        if (rowZero[i] ||colZero[j]) {
          A[i][j] = 0
        }
      }
    }
    return A
  },
};
A = [[1, 2, 3, 4], 
     [5, 6, 7, 0], 
     [9, 2, 3, 4]]

console.log(module.exports.matrics(A));
