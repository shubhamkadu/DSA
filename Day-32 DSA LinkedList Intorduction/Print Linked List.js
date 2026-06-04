```
Problem Description

You are given A which is the head of a linked list. Print the linked list in space separated manner.

Note : The last node value must also be succeeded by a space and after printing the entire list you should print a new line



Problem Constraints

1 <= size of linked list <= 105

1 <= value of nodes <= 109



Input Format

The first argument A is the head of a linked list.


Output Format

You dont need to return anything


Example Input

Input 1:
A = 1 -> 2 -> 3
Input 2:
A = 4 -> 3 -> 2 -> 1


Example Output

Output 1:
1 2 3
Output 2:
4 3 2 1


Example Explanation

For Input 1:
We print the given linked list
For Input 2:
We print the given linked list
```;

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
	solve : function(A){
        let curr = A
        let output = ""
        while(curr != null){
            output += curr.data+" "
            curr = curr.next
        }

        console.log(output)

	}
};

// Time Complexity: O(N) Linear Traversal: The while loop visits every single node in the linked list exactly once.Variable (N): Where (N) represents the total number of nodes inside the linked list.

// Space Complexity: O(N) Auxiliary Space: The code creates an empty string variable output.String Growth: As the loop iterates, it appends each node's data into this string. By the end of the traversal, the output string holds a copy of all values, requiring space proportional to the size of the list.