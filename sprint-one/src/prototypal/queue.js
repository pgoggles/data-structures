var Queue = function() {
  var queueObject = Object.create(queueMethods);
  queueObject.storage = {};
  return queueObject;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


var queueMethods = {};
queueMethods.size = function () {
  var size = 0;
  for (var key in this.storage) {
    size ++;
  }
  return size;
};
queueMethods.enqueue = function (value) {
  var size = this.size();
  this.storage[size] = value;
};
queueMethods.dequeue = function () {
  var size = this.size();
  dequeuedValue = this.storage[0];
  for (var i = 1; i < size; i ++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[size - 1];
  return dequeuedValue;
};

