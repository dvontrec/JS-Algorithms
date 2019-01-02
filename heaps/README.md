# Max Binary Heap

- Binary heap where parent nodes are bigger than the children

## Insert

- Add To the end and bubble up
- Recieves a value for the new point in the heap
- Push the value to the end of the heap
- Bubble up
  - Creata a variable that is the length of values -1
  - Create parent value that is (n-1)/2 floored
  - Loop as ling as the n value is greater than the parent value
  - Swap the value of n with the parent
  - Set the index to be the parent index and start over
