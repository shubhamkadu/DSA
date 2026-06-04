```
Problem Description

You are given a singly linked list having head node A. You have to reverse the linked list and return the head node of that reversed list.

NOTE: You have to do it in-place and in one-pass.



Problem Constraints

1 <= Length of linked list <= 105

Value of each node is within the range of a 32-bit integer.



Input Format

First and only argument is a linked-list node A.



Output Format

Return a linked-list node denoting the head of the reversed linked list.



Example Input

Input 1:

 A = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
Input 2:

 A = 3 -> NULL 


Example Output

Output 1:

 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Output 2:

 3 -> NULL 


Example Explanation

Explanation 1:

 The linked list has 5 nodes. After reversing them, the list becomes : 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Expalantion 2:

 The linked list consists of only a single node. After reversing it, the list becomes : 3 -> NULL 
```;

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reverseList: function (A) {
    let curr = A;
    let prev = null;
    while (curr !== null) {
      let agla = curr.next; // 'agla' means 'next' in Hindi/Urdu. It saves the rest of the list.
      curr.next = prev; // Reverses the pointer of the current node to look backward.
      prev = curr; // Moves the 'prev' marker one step forward.
      curr = agla; // Moves the 'curr' marker one step forward.
    }
    return prev; // 'prev' becomes the new head of the reversed list.
  },
};


// Time Complexity: O(N))The algorithm uses a single while loop that visits every node in the linked list exactly once.(N) represents the total number of nodes in the list.
// Space Complexity:O(1))The algorithm is an in-place solution.It only uses a fixed number of pointer variables (curr, prev, agla) regardless of how large the input list is. No extra memory or call-stack space is allocated.


