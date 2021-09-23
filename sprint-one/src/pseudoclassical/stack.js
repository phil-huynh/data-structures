var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  if (this.top > 0) {
    this.top--;
    var value = this.storage[this.top];
    delete this.storage[this.top];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.top;
};
