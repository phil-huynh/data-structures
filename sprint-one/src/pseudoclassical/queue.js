var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.top = 0;
  this.bottom = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.top] = value;
  this.top++;
};

Queue.prototype.dequeue = function () {
  if (this.top - this.bottom) {
    var value = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return value;
  }
};

Queue.prototype.size = function () {
  return this.top - this.bottom;
};


