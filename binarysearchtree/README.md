# Binary search Tree

- Tree with one root and 2 children
- No repeats
- Lower numbers on left higher numbers on right

## Insert

- Create a new node
- Start at the root
  - Check if there is a root, if not the new node is now the root
  - If there is a root check if the value of the new node is greater than or less than the root value
  - If the value is greater
    - Check to see if there is a node on the right
      - If there is, move to that node and compare values again
      - If there is not place the right
  - If the value is less
    - Check to see if there is a node on the left
      - If there is, move to that node and compare values again
      - If there is not place the new node as the left
- Return the tree
