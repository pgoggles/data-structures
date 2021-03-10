var Queue = function() {
  var someInstance = {};
  var storage = {};
  someInstance.enqueue = function(value) {
    var size = someInstance.size();
    storage[size] = value;
  };
  someInstance.dequeue = function() {
    var size = someInstance.size();
    dequeuedValue = storage[0];
    for (var i = 1; i < size; i++) {
      storage[i - 1] = storage[i];
    }
    delete storage[size - 1];
    return dequeuedValue;
  };
  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      size ++;
    }
    return size;
  };
  return someInstance;
};
