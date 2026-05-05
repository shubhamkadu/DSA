module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let fre = {}
    for(let i = 0;i<A.length;i++){
      if(fre[A[i]] == undefined){
        fre[A[i]] = 1
      }else{
        fre[A[i]]++
      }
    }

    let value = A.length/3
    
    for(let key in fre){
      if(fre[key] >value){
        return key
      }
    }
    return -1
  },
};
A = [1, 2, 3, 1, 1];
console.log(module.exports.solve(A));
