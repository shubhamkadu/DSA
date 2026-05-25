module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  MinimumDistBwtTwoStall: function MinimumDistBwtTwoStall(arr) {
    let MinDist = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let dist = arr[i] - arr[i + 1];
      MinDist = Math.min(dist, MinDist);
    }
    return MinDist;
  },

  IsPossible: function IsPossible(arr, mid, k) {
    let count = 0;
    let sum = 0;
    for (let dist of arr) {
      sum += dist;
      if (sum >= mid) {
        sum = dist;
        count++;
      }
    }
    if (count < k) {
      return false;
    }

    return true;
  },

  solve: function (A, B) {
    let start = new MinimumDistBwtTwoStall(A);
    let end = A.length - 1;
    let ans = -1;
    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (IsPossible(A, mid, B)) {
        ans = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  },
};

A = [1, 2, 3, 4, 5];
B = 3;

console.log(module.exports.solve(A, B, C));
