var BinarySearchTree = function(value) {
  var biSearchT = Object.create(biSearchTMethods);
  biSearchT.left = null;
  biSearchT.right = null;
  biSearchT.value = value;
  return biSearchT;
};
var biSearchTMethods = {};

biSearchTMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

biSearchTMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  if (this.value > target && this.left) {
    return this.left.contains(target);
  }
  if (this.value < target && this.right) {
    return this.right.contains(target);
  }
  return false;
};

biSearchTMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
insert - 0log(n)
contains - 0log(n)
depthFirstLog - 0log(n)
 */
