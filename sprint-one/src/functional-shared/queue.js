var Queue = function() {
  var queueObject = {};
  queueObject.storage = {};
  _.extend(queueObject, queueMethods);
  return queueObject;
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

queueMethods.dequeue = function (value) {
  var size = this.size();
  var dequeuedValue = this.storage[0];
  for (var i = 1; i < size; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[size - 1];
  return dequeuedValue;
};


