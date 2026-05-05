module.exports = {
  //param A : string
  //return an integer
  solve: function (A, B) {
    if (A.length !== B.length) return 0;
    let fre = {};
    for (let char of A) {
      if (fre[char] == undefined) {
        fre[char] = 1;
      } else {
        fre[char]++;
      }
    }
    for (let char of B) {
      if (!fre[char]) {
        return 0;
      }
      fre[char]--;
    }
    return 1;
  },
};
A = "secure";
B = "rescue";
console.log(module.exports.solve(A, B));
