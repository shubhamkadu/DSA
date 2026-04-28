const solution = {
  /**
   * Finds the starting index of the subarray of length B with the minimum sum.
   * @param A - Array of integers
   * @param B - Size of the subarray window
   * @returns The starting index of the minimum sum subarray
   */
  maxSubarray: function (A: number[], B: number): number {
    let windowSum: number = 0;

    // 1. Calculate initial sum of the first 'B' elements
    for (let i = 0; i < B; i++) {
      windowSum += A[i];
    }

    let minSum: number = windowSum;
    let indexAns: number = 0;

    // 2. Slide the window across the array
    for (let i = B; i < A.length; i++) {
      // Add the new element (right) and remove the oldest element (left)
      windowSum = windowSum + A[i] - A[i - B];

      if (windowSum < minSum) {
        minSum = windowSum;
        indexAns = i - B + 1;
      }
    }

    return indexAns;
  },
};

// Test Case
const A: number[] = [3, 7, 90, 20, 10, 50, 40];
const B: number = 3;
console.log(solution.maxSubarray(A, B)); // Output: 3
