var Stack = function() {
  var someInstance = {};
  var storage = {};
  someInstance.push = function(value) {
    var size = someInstance.size();
    storage[size] = value;
  };

  someInstance.pop = function() {
    var size = someInstance.size();
    poppedValue = storage[size - 1];
    delete storage[size - 1];
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

