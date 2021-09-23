var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.storage = {};
  stackInstance.top = 0;
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  if (this.top > 0) {
    this.top--;
    var value = this.storage[this.top];
    delete this.storage[this.top];
    return value;
  }
};

stackMethods.size = function() {
  return this.top;
};





