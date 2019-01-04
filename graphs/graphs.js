// Class for building an undirected graph (2 way connections)
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    // if there is not already a vertex with the given value
    if (!this.adjacencyList[val]) {
      // adds a key value pair to the adjacency list
      this.adjacencyList[val] = [];
    }
  }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');

console.log(graph.adjacencyList);
