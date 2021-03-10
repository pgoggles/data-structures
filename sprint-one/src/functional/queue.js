var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var size = 0;
    for (var key in storage) {
      size ++;
    }
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var size = 0;
    for (var key in storage) {
      size ++;
    }
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
