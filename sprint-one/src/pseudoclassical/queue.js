var Queue = function() {
  this.storage = {};
};

Queue.prototype.size = function () {
  var size = 0;
  for (var key in this.storage) {
    size ++;
  }
  return size;
};

Queue.prototype.enqueue = function (value) {
  var size = this.size();
  this.storage[size] = value;
};

Queue.prototype.dequeue = function () {
  var size = this.size();
  var dequeuedValue = this.storage[0];
  for (var i = 1; i < size; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[size - 1];
  return dequeuedValue;
};
