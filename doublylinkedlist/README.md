# Doubly Linked List

## Node

- stores 3 things
  - Piece of data - val
  - Reference to the previous node
  - Reference to next node

## Push

- Accepts a value
- Adds a new node to the end of the linkedlist
- If the list is empty add the new node as the head and the tail
- If there are elements set the prev property to be the current tail
- Set the next of the tail to be the new node
- Increment the length
- Return the list
