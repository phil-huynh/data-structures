var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    container : [],
    top : 0
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  var currentKey = this.top
  this[currentKey] = value;

  this.top = value + 1;
};


