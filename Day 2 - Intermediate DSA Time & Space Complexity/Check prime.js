```Given a number N. Check if it is prime or not```
module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A) {
    function countFactor(n){
        let count = 0
        let N = Math.sqrt(n)
        for(let i = 1;i<=N;i++){
            if(N%i ===0){
                if(i == N/i){
                    count++
                }else{
                    count+=2
                }
            }
        }
        return count
        
    }

    if(countFactor(A) ==2){
        return true
    }else{
        return false
    }
   
  },
};
