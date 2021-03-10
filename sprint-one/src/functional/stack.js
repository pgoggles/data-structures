var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = 0;
    for (var key in storage) {
      size ++;
    }
    storage[size + 1] = value;
  };

  someInstance.pop = function() {
    var size = 0;
    for (var key in storage) {
      size ++;
    }
    poppedValue = storage[size];
    delete storage[size];
    return poppedValue;
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

