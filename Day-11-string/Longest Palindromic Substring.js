```
Problem Description

Given a string A of size N, find and return the longest palindromic substring in A.

Substring of string A is A[i...j] where 0 <= i <= j < len(A)

Palindrome string:
A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

Incase of conflict, return the substring which occurs first ( with the least starting index).



Problem Constraints

1 <= N <= 6000



Input Format

First and only argument is a string A.



Output Format

Return a string denoting the longest palindromic substring of string A.



Example Input

Input 1:
A = "aaaabaaa"
Input 2:
A = "abba


Example Output

Output 1:
"aaabaaa"
Output 2:
"abba"


Example Explanation

Explanation 1:
We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".
Explanation 2:
We can see that longest palindromic substring is of length 4 and the string is "abba".


```;

module.exports = {
  // param A: string
  // return: string
  longestPalindrome: function (A) {
    let N = A.length;
    if (N === 0) return "";

    let start = 0;
    let maxLen = 1;

    for (let c = 0; c < N; c++) {
      // Odd length palindrome
      let l = c,
        r = c;
      while (l >= 0 && r < N && A[l] === A[r]) {
        if (r - l + 1 > maxLen) {
          start = l;
          maxLen = r - l + 1;
        }
        l--;
        r++;
      }

      // Even length palindrome
      l = c;
      r = c + 1;
      while (l >= 0 && r < N && A[l] === A[r]) {
        if (r - l + 1 > maxLen) {
          start = l;
          maxLen = r - l + 1;
        }
        l--;
        r++;
      }
    }

    return A.substring(start, start + maxLen);
  },
};
