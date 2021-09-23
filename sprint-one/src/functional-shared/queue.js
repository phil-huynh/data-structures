var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    top: 0,
    bottom: 0,
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },
  dequeue: function() {
    if (this.top - this.bottom) {
      var value = this.storage[this.bottom];
      delete this.storage[this.bottom];
      this.bottom++;
      return value;
    }
  },
  size: function() {
    return this.top - this.bottom;
  }
};


