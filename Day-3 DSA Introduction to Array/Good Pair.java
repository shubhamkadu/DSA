import java.util.HashSet;

public class Solution {
    
    public int solve(int[] A, int B) {
        // Create a hash set to store seen numbers
        HashSet<Integer> store = new HashSet<>();
        
        for (int i = 0; i < A.length; i++) {
            int value = B - A[i];
            
            // If the complement exists in our set, we found a pair
            if (store.contains(value)) {
                return 1;
            } else {
                store.add(A[i]);
            }
        }
        
        // Return 0 if no such pair exists
        return 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        
        int[] A = {1, 2, 3, 4};
        int B = 7;
        
        int result = sol.solve(A, B);
        System.out.println("Output: " + result); // Prints 1
    }
}
