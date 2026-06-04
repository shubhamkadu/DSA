```
Problem Description

You are given a singly linked list and an integer k. Your task is to access the node at the k-th index (0-based indexing) in the list and return its value. If the index is out of bounds, return -1.




Problem Constraints

k<=10^6


Input Format

The first argument is a pointer to the head of the linked-list.

The second argument is a positive integer K.



Output Format

A single integer, which is the value of the k-th node in the Linked List.


Example Input

1->3->5->7->9
2

Example Output

5

Example Explanation

The element with index 2 is 5 (the 3rd element)
```;

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //param B : integer
 //return an integer
	solve : function(A, B){
        
        let i = 0
        while(A !=null){
            if(i == B){
                return A.data
            }
            A = A.next
            i++
        }
        return -1

	}

};

// Time Complexity: O(N) where (N) is list length.
// Space Complexity: O(1) because it uses constant memory.