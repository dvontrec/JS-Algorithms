# Singly Linked List

## Node

- stores 2 things
  - Piece of data - val
  - Reference to next node

## Push

- Accepts a value
- Create a new node using the value passed in
- If there is no head set the head and tail to be the newly created node
- If there is a head set the newly created node to be the next of the tail
- Increment length by 1
- return the linked list

## Pop

- If there are no nodes in the list return undefined
- Loop through the list until tail is reached
- Set the property of the 2nd to last node to be null
- set the new tail to be the second to last item
- Decrement the length of the list by 1
- If length is zero after pop make head and tail null
- Return the node that was removed

## Shift

- If there are no nodes return undefined
- Store the current head property in a variable
- Set the head property to be the current heads next property
- Decrement the length by 1
- return the falue of the node removed
