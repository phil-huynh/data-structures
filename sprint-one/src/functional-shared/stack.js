var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    top: 0
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  pop: function () {
    if (this.top > 0) {
      this.top --;
      var value = this.storage[this.top];
      delete this.storage[this.top];
      return value;
    }
  },

  size: function() {
    return this.top;
  }

};