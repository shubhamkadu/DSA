module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A, B, C) {
    function getMaxAndSumOfArray(arr) {
      let max = -Infinity;
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return [max, sum];
    }

    function isPossible(arr, mid, k) {
      let NumberOfPainters = 1;
      let sum = 0;

      for (let board of arr) {
        if (sum > mid) {
          sum = arr[board];
          NumberOfPainters++;
        } else {
          sum += arr[board];
        }
      }

      if (NumberOfPainters > k) {
        return false;
      }
      return true;
    }

    let [start, end] = getMaxAndSumOfArray(C);
    let ans = -1;
    const MOD = 10000003n;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (isPossible(C, mid, A)) {
        ans = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return Number((BigInt(ans) * BigInt(B)) % MOD);
  },
};

A = 10;
B = 1;
C = [1, 8, 11, 3];

console.log(module.exports.solve(A, B, C));
