var Queue = function() {
  var someInstance = {};

  var top = 0;
  var bottom = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.dequeue = function() {
    if (top - bottom) {
      var value = storage[bottom];
      delete storage[bottom];
      bottom++;
      return value;
    }
  };

  someInstance.size = function() {
    return top - bottom;
  };

  return someInstance;
};
