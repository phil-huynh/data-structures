

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {value: node};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  //check if fromNode and toNode are in each others object
  //if yes return true
  //if no return false
  if (this.nodes[fromNode].to === this.nodes[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //check to see if edge exists
  //go into fromNode edge and add the toNode
  //go to toNode edge and add the fromNode
  if (!this.nodes[toNode]) {
    this.addNode(toNode);
  }
  if (fromNode.from == null || toNode.to === null) {
    this.nodes[toNode].from = this.nodes[fromNode];
  }
  this.nodes[fromNode].to = this.nodes[toNode];
  this.nodes[toNode].to = this.nodes[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
// remove toNode and fromNode from each others edge object
  if (fromNode.from === toNode.to || toNode.from === fromNode.to) {
    this.nodes[fromNode].from = null;
    this.nodes[toNode].to = null;
  }
  this.nodes[fromNode].to = null;
  this.nodes[toNode].from = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //console.log(this);

  //iterate through nodes and a invoke callback function on each
  for (var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
addNode - 0(1)
contains - 0(n)
remove node - 0(1)
hasEdge - 0(n)
addEdge - 0(1)
removeEdge - 0(1)
froEachNode - 0(n)
 */


