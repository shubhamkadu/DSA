```
Problem Description

Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.

Note: Return the two numbers in ascending order.


Problem Constraints

2 <= |A| <= 100000
1 <= A[i] <= 109



Input Format

The first argument is an array of integers of size N.



Output Format

Return an array of two integers that appear only once.



Example Input

Input 1:
A = [1, 2, 3, 1, 2, 4]
Input 2:

A = [1, 2]


Example Output

Output 1:
[3, 4]
Output 2:

[1, 2]


Example Explanation

Explanation 1:
3 and 4 appear only once.
Explanation 2:

1 and 2 appear only once.

```;

module.exports = { 
 //param A : array of integers
 //return a array of integers

	solve : function(A){

    function checkTheBitIsSet(n,i){
        let val = n & (1<<i)
        if(val == 0){
            return false
        }else{
            return true
        }
    }

    let xorAll = 0
    let setBitPositionXorAll = 0
    for(let i = 0;i<A.length;i++){
        xorAll = xorAll ^ A[i]
    }

    for(let i = 0;i<32;i++){
        if(checkTheBitIsSet(xorAll,i)){
            setBitPositionXorAll = i
            break
        }
    }
    
    let num1 = 0
    let num2 = 0
    let ans = []

    for(let i= 0;i<A.length;i++){
        if(checkTheBitIsSet(A[i],setBitPositionXorAll)){
            num1 = num1 ^ A[i]
        }else{
            num2 = num2 ^ A[i]
        }
    }

    if( num1>num2 ){
        ans.push(num2)
        ans.push(num1)
    }else{
        ans.push(num1)
        ans.push(num2)

    }
   return ans  
	}
};
