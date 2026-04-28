class Solution:
    def find_min_subarray_index(self, A, B):
        # 1. Calculate the sum of the first 'B' elements
        window_sum = sum(A[:B])
        
        min_sum = window_sum
        index_ans = 0
        
        # 2. Slide the window from the B-th element to the end
        for i in range(B, len(A)):
            # Add the current element and subtract the one that left the window
            window_sum = window_sum + A[i] - A[i - B]
            
            if window_sum < min_sum:
                min_sum = window_sum
                index_ans = i - B + 1
                
        return index_ans


# Test Case
A = [3, 7, 90, 20, 10, 50, 40]
B = 3
sol = Solution()
print(sol.find_min_subarray_index(A, B))  # Output: 3
