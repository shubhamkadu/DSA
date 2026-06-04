```
Problem Description

You are given a linked list A
Each node in the linked list contains two pointers: a next pointer and a random pointer
The next pointer points to the next node in the list
The random pointer can point to any node in the list, or it can be NULL
Your task is to create a deep copy of the linked list A
The copied list should be a completely separate linked list from the original list, but with the same node values and random pointer connections as the original list
You should create a new linked list B, where each node in B has the same value as the corresponding node in A
The next and random pointers of each node in B should point to the corresponding nodes in B (rather than A)


Problem Constraints

0 <= |A| <= 106



Input Format

The first argument of input contains a pointer to the head of linked list A.



Output Format

Return a pointer to the head of the required linked list.



Example Input

Given list
   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Output

   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Explanation

You should return a deep copy of the list. The returned answer should not contain the same node as the original list, but a copy of them. The pointers in the returned list should not link to any node in the original input list.
```;


module.exports = {
  //param head : head node of linked list
  //return the head node in the linked list
  copyRandomList: function (head) {
    if (head === null) return null;

    let curr = head;

    // 1️ Insert cloned nodes
    while (curr !== null) {
      let copy = new RandomListNode(curr.data);
      copy.next = curr.next;
      curr.next = copy;
      curr = copy.next;
    }

    // 2️  Assign random pointers
    curr = head;
    while (curr !== null) {
      if (curr.random !== null) {
        curr.next.random = curr.random.next;
      }
      curr = curr.next.next;
    }

    // 3️ Separate the lists
    curr = head;
    let copyHead = head.next;

    while (curr !== null) {
      let copy = curr.next;
      curr.next = copy.next;
      if (copy.next !== null) {
        copy.next = copy.next.next;
      }
      curr = curr.next;
    }

    return copyHead;
  },
};


// Time Complexity: O(N)The algorithm makes a few linear passes over the linked list.
// Phase 1 inserts the cloned nodes interweaved with the original ones.
// Phase 2 updates the random pointers.
// Each node is visited a fixed number of times, resulting in a linear time complexity proportional to the number of nodes (N).



// Space Complexity:(1) Auxiliary SpaceExcluding the space required to construct
// the newly cloned nodes (which is mandatory for any deep copy task),
// this approach uses no additional auxiliary tracking memory.Unlike the standard hash-map approach which requires O(N)
// extra space to pair original nodes with new nodes,
//  this interleaving technique works completely in-place with constant extra variables