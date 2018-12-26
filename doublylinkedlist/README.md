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

## Pop

- Removes the last value from the list
- If the list is empty return undefined
- Set the current tail in a variable to be returned
- If the length is 1 set the head and tail both to be null
- Update the tail to be the prev of the current tail
- Set the new tails next to be null
- Decrement the length
- Return the old tail

## Shift

- Removes the head from a doubly linked list
- If the length is 0 return undefined
- Store the current head in a variable
- If the length is one set head and tail to null
- Otherwise set the next node to be the new head
- Set the new heads prev property to null
- Set the old heads next to null
- Decrement the length
- Return the old head
