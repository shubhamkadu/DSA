module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A) {

    function maxLength(arr){
      let max = 0
      for(let i = 0;i<A.length;i++){
        if(arr[i]>max) max = arr[i]
      }
      return max
    }

    let maxlen = maxLength(A);
    let freArr = new Array(maxlen + 1).fill(0);
    console.log(freArr);

    for (let i = 0; i < A.length; i++) {
      freArr[A[i]]++;
    }

    let idx = 0
    for(let i = 0;i<freArr.length;i++){
      let f = freArr[i]
      for(let k = 0;k<f;k++){
        A[idx] = i
        idx++
      }
    }
    return A
  },
};

A = [10,8,9];

console.log(module.exports.solve(A));
