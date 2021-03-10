var Stack = function() {
  var stackObject = Object.create(stackMethods);
  stackObject.storage = {};
  return stackObject;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};
stackMethods.size = function () {
  var size = 0;
  for (var key in this.storage) {
    size ++;
  }
  return size;
};
stackMethods.push = function (value) {
  var size = this.size();
  this.storage[size] = value;
};
stackMethods.pop = function () {
  var size = this.size ();
  var poppedValue = this.storage[size - 1];
  delete this.storage[size - 1];
  return poppedValue;
};


