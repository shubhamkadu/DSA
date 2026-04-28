```Problem Description

Given a positive integer A, write a program to find the Ath Fibonacci number.

In a Fibonacci series, each term is the sum of the previous two terms and the first two terms of the series are 0 and 1. i.e. f(0) = 0 and f(1) = 1. Hence, f(2) = 1, f(3) = 2, f(4) = 3 and so on.

NOTE: 0th term is 0. 1th term is 1 and so on.



Problem Constraints

0 <= A <= 44



Input Format

First and only argument is an integer A.



Output Format

Return an integer denoting the Ath Fibonacci number.



Example Input

Input 1:

 A = 4
Input 2:

 A = 6


Example Output

Output 1:

 3
Output 2:

 8


Example Explanation

Explanation 1:

 Terms of Fibonacci series are: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.
 0th term is 0 So, 4th term of Fibonacci series is 3. 
Explanation 2:

 6th term of Fibonacci series is 8.```



 // YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS


 //Top Down Approch
let A = 6;

let memo = new Array(A + 1).fill(0);
// console.log("memo",memo)

function fib(n) {
  if (n <= 1) return n
  
  if (memo[n] != 0) {
    return memo[n];
  }
  memo[n] = fib(n - 1) + fib(n - 2);

  
  return memo[n];
}

console.log(fib(A));

//Time Complexity : number of function call * individual function call=> o(N) * o(1) = 0(N)
// space complexity : recursion => stack space => o(N)

// Bottom up Approch

let N = 6

let tab = new Array(N+1).fill(0)
tab[0] = 0
tab[1] = 1
function fib(N){

    for(let i=2;i<=N;i++){
        tab[i] = tab[i-1] + tab[i-2]
    }
    
    return tab[N]
}

console.log(fib(N))

// Optimize space complexity

// At any point of time we need  previous 2 val
let first = 0
let second = 1
let B = 4
function fib(B){

    for(let i=2;i<=B;i++){
        B = first +second
        first = second
        second = first+second
    }
    return B
}

console.log(B)





