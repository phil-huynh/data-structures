var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.top = 0;
  queueInstance.bottom = 0;
  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

queueMethods.dequeue = function () {
  if (this.top - this.bottom) {
    var value = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return value;
  }
};
queueMethods.size = function() {
  return this.top - this.bottom;
};

