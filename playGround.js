module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let seen = [];
    for (let num of B) {
      let target = A - num;
      if (B.indexOf(target) !== -1) {
        return 1;
      }
      seen.push(num);
    }

    return 0;
  },
};

A = 8;
B = [3, 5, 1, 2, 1, 2];
console.log(module.exports.solve(A,B));
