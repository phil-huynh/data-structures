var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head == null) {
      list.head = node;
      list.tail = node;
      node.next = null;
    } else {
      list.tail.next = node;
      list.tail = node;
      node.next = null;
    }

  };

  list.removeHead = function() {
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {

    var currentNode = list.head;
    while (currentNode != null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 list.addToTail time complexity is O(1)
 list.removeHead time complexity is O(1)
 list.contains time complexity is O(n)
 */
