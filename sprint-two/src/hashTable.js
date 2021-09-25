

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    var bucket = {};
    this._storage[index] = bucket;
    this._storage[index][k] = v;
  } else {
    this._storage[index][k] = v;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index][k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index][k];
};



/*
insert - 0(1)
retrieve - 0(1)
remove - 0(1)
 */


