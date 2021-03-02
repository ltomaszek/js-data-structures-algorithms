// Undirected Unweighed Graph using adjacency list

class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {}; 
  }

  addVertex(node)  {
    // check if already exists
    if (node in this.adjacentList) {
      return false;
    }
    this.adjacentList[node] = null;
    this.numberOfNodes++;
    return true;
  }
  
  addEdge(node1, node2) { 
    if (node1 in this.adjacentList == false
      || node2 in this.adjacentList == false
      || node1 == node2) {
        return false;
    }
    if (this.adjacentList[node1] == null) {
      this.adjacentList[node1] = [];
    }
    if (this.adjacentList[node2] == null) {
      this.adjacentList[node2] = [];
    }
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return true;
  }

  showConnections() { 
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      if (nodeConnections == null) {
        console.log(node, '-->', null);
        continue;
      }
      let connections = '';
      for (let vertex of nodeConnections) {
        connections = connections += vertex + ' ';
      }
      console.log(node, '-->', connections);
    }
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');


myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5