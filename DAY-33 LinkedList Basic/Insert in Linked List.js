```
Problem Description

You are given A which is the head of a linked list. Also given is the value B and position C. Complete the function that should insert a new node with the said value at the given position.

Notes:

In case the position is more than length of linked list, simply insert the new node at the tail only.
In case the pos is 0, simply insert the new node at head only.
Follow 0-based indexing for the node numbering.


Problem Constraints

0 <= size of linked list <= 105

1 <= value of nodes <= 109

1 <= B <= 109

0 <= C <= 105



Input Format

The first argument A is the head of a linked list.

The second argument B is an integer which denotes the value of the new node

The third argument C is an integer which denotes the position of the new node



Output Format

Return the head of the linked list


Example Input

Input 1:
A = 1 -> 2
B = 3
C = 0
Input 2:
A = 1 -> 2
B = 3
C = 1


Example Output

Output 1:
3 -> 1 -> 2
Output 2:
1 -> 3 -> 2


Example Explanation

For Input 1:
The new node is add to the head of the linked list
For Input 2:
The new node is added after the first node of the linked list

```;



module.exports = {
  //param A : head node of linked list
  //param B : integer (value of the new node)
  //param C : integer (position to insert the new node)
  //return the head node in the linked list
  solve: function (A, B, C) {
    // Edge Case: If the list is empty, return a new node containing value B
    if (A === null) {
      return new Node(B);
    }

    // Case 1: If insertion position C is 0, insert the new node at the head
    if (C == 0) {
      const newNode = new Node(B); // Create the new node
      newNode.next = A; // Point new node's next to the current head
      A = newNode; // Move the head pointer to the new node
      return A; // Return the new head
    }

    // Find the node just before the target position (at index C - 1)
    let x = getKthElement(A, C - 1);

    // Case 2: If position C exceeds the list length, getKthElement returns null
    if (x == null) {
      x = A; // Reset pointer to the head of the list

      // Traverse all the way to the end to locate the last (tail) node
      while (x.next !== null) {
        x = x.next;
      }
    }

    // Case 3: Standard middle insertion or tail insertion
    const newNode = new Node(B); // Create the new node with value B
    newNode.next = x.next; // Connect new node to the rest of the list
    x.next = newNode; // Link the previous node (x) to the new node

    return A; // Return the unchanged head pointer of the list

    // Helper function to find and return the node at a specific index B
    function getKthElement(head, B) {
      let i = 0;
      while (head != null) {
        if (i == B) {
          return head; // Return the target node once the index matches
        }
        head = head.next; // Move forward to the next node
        i++; // Increment index tracker
      }
      return null; // Return null if index B is out of bounds
    }
  },
};

// Time Complexity:O(N)Best Case O(1): If inserting at the head (C == 0) or if the list is empty,
// the operation finishes in constant time.Worst Case O(N): If the position C is greater than 
// or equal to the size of the list (N), your code will traverse the list twice:First,
// getKthElement(A, C-1) traverses the entire list of length O(N) and returns null.Next,
// because x == null, the code enters the while (x.next !== null) loop and traverses the entire 
// list from the beginning to find the tail node.Total steps: (N + N = 2N), which simplifies to linear time O(N).
