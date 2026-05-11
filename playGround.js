module.exports = {
  nextPermutation: function (A) {
    let n = A.length;

    if (n === 1) return A;

    let pivotIndex = -1;

    // find pivot
    for (let i = n - 2; i >= 0; i--) {
      if (A[i] < A[i + 1]) {
        pivotIndex = i;
        break;
      }
    }   

    // reverse whole array if no pivot
    if (pivotIndex === -1) {
      reverse(A, 0, n - 1);
      return A;
    }

    let swapIndex = -1;

    // find next greater element
    for (let i = n - 1; i >= 0; i--) {
      if (A[i] > A[pivotIndex]) {
        swapIndex = i;
        break;
      }
    }

    // swap
    doSwap(A, pivotIndex, swapIndex);

    // reverse suffix
    reverse(A, pivotIndex + 1, n - 1);

    return A;

    // reverse helper
    function reverse(arr, i, j) {
      while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
      }
    }

    // swap helper
    function doSwap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  },
};
A = [1, 2, 3, 4, 5];
console.log(module.exports.solve(A));

