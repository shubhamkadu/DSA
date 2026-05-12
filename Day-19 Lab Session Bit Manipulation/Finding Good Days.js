```
Finding Good Days
```;

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    function checkSetBit(n, k) {
      let val = n & (1 * 2 ** k);
      if (val == 0) {
        return false;
      }
      return true;
    }
    let count = 0;
    for (let i = 0; i <= 32; i++) {
      if (checkSetBit(A, i)) {
        count++;
      }
    }
    return count;
  },
};
// time ccomplexyty:o(1) because we are checking for 32 bit only
// space complexity:o(1)

