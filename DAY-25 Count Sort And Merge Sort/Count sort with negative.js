```
implement the count sort with neagative numbers
constraints
-10^6 <= A[i] <= 10^6
```

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    function maxLength(arr) {
      let max = 0;
      for (let i = 0; i < A.length; i++) {
        if (arr[i] > max) max = arr[i];
      }
      return max;
    }
    function minLength(arr) {
      let min = 0;
      for (let i = 0; i < A.length; i++) {
        if (arr[i] < min) min = arr[i];
      }
      return min;
    }

    let maxlen = maxLength(A);
    let minlen = minLength(A);
    let range = maxlen - minlen + 1;
    let freArr = new Array(range).fill(0);

    for (let i = 0; i < A.length; i++) {
      freArr[A[i] - minlen]++;
    }

    let idx = 0;
    for (let i = 0; i < freArr.length; i++) {
      let f = freArr[i];
      for (let k = 0; k < f; k++) {
        A[idx] = i + minlen;
        idx++;
      }
    }
    return A;
  },
};
