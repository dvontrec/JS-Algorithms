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

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(key => key != v2); // filters the list leaving only keys that are not v2
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(key => key != v1); // filters the list leaving only keys that are not v1
  }
}

let graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Dallas', 'Aspen');

console.log(graph.adjacencyList);

graph.removeEdge('Tokyo', 'Dallas');
console.log(graph.adjacencyList);
