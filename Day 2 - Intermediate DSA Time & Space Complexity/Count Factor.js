```Given N find the Positive Factor of N  ```

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A) {
      let count = 0;
      let N = Math.sqrt(A);
      for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
          if (i == N / i) {
            count++;
          } else {
            count += 2;
          }
        }
      }
      return count;
  },
};