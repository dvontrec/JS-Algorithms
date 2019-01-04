# Graphs

## Add Vertex

- Method that accepts a name of a vertex
- Adds a key to the adjacency list with the name of the vertex and sets its value to be an empty array

## Add Edge

- Accepts 2 vertecies
- Find in the adjacency list the key of vertex 1 and push vertex 2 to the array
- Find in the adjacency list the key of vertex 2 and push vertex 1 to the array

## Remove An Edge

- Accepts 2 vertices
- Reassign the key of vertex 1 to be an array that does not contain vertex 2
- Reassign the key of vertex 2 to be an array that does not contain vertex 1

## Remove A Vertex

- Accepts the name of the vertex
- Loops as long as there are other verteces in the adjacency list for this vertex
  - Remove the edges for the vertex and all its connected verteces
- Remove the key in the adjacency list for that vertex
