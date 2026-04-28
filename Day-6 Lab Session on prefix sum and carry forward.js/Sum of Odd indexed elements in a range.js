```
Problem Description

You are given:
An integer array A representing the array of numbers of size N.
A 2D array B of size Q, where each row B[i] contains two integers B[i][0] and B[i][1], representing the range [L, R].

For each query in B, calculate the sum of elements in A at odd indices within the specified range [L, R] and return the results as an array.


Problem Constraints

1 <= N <= 10^5
-10^5 <= A[i] <= 10^5
1 <= Q <= 10^5
0 <= B[i][0], B[i][1] < N
B[i][0] <= B[i][1].


Input Format

First Argument A, is a list of integers representing the array.
Second Argument B, is a 2D list where each sublist B[i]=[L,R] contains two integers L and R, representing the range for the query.


Output Format

Return a list of integers where each integer is the result of the sum of elements at odd indices in the range [L, R] for each query.


Example Input

Input 1:
A = [2, 8, 3, 9, 15]
B = [ [1, 4], 
      [0, 2], 
      [2, 3] ]
Input 2:
A = [5, 15, 25, 35, 45]
B = [ [2, 2], 
      [2, 4] ]


Example Output

Output 1:
[17, 8, 9]
Output 2:
[0, 35]


Example Explanation

Explanation 1:
Query 1: [1, 4] -> Sum = A[1] + A[3] = 8 + 9 = 17
Query 2: [0, 2] -> Sum = A[1] = 8
Query 3: [2, 3] -> Sum = A[3] = 9

Thus [17, 8, 9] is the Result.
Explanation 2:
Query 1: [2, 2] -> Sum = 0
Query 2: [2, 4] -> Sum = A[3] = 35

Thus [0, 35] is the result.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases

```;

 module.exports = {
   // param A : array of integers
   // param B : array of array of integers
   // return an array of integers

   sumOfOddIndexedElements: function (A, B) {
     const N = A.length;
     const prefixOdd = new Array(N).fill(0);

     prefixOdd[0] = 0; // index 0 is even

     for (let i = 1; i < N; i++) {
       prefixOdd[i] = prefixOdd[i - 1] + (i % 2 === 1 ? A[i] : 0);
     }

     const result = [];

     for (let i = 0; i < B.length; i++) {
       const [L, R] = B[i];
       const sum = L === 0 ? prefixOdd[R] : prefixOdd[R] - prefixOdd[L - 1];

       result.push(sum);
     }

     return result;
   },
 };



