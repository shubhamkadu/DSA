module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  maxSubarray: function (A, B) {
    let count = 0
    for(let i =0;i<A.length;i++){
      let sum = 0
      for(let j = i;j<A.length;j++){
        sum += A[j]
        let len = j-i +1

        if(len%2 === 0 && sum <B) count++
        else if(len%2 !== 0 && sum >B) count++
      }
    }
    return count

  },
};
A = [1, 2, 3, 4, 5];
B = 4;

console.log(module.exports.maxSubarray(A, B));
