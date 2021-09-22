var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function() {
    if (top > 0) {
      top--;
      var value = storage[top];
      delete storage[top];
      return value;
    }
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};

