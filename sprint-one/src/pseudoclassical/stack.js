var Stack = function() {
  this.storage = {};
};


Stack.prototype.size = function () {
  var size = 0;
  for (var key in this.storage) {
    size ++;
  }
  return size;
};

Stack.prototype.push = function (value) {
  var size = this.size();
  this.storage[size] = value;
};

Stack.prototype.pop = function () {
  var size = this.size();
  var poppedValue = this.storage[size - 1];
  delete this.storage[size - 1];
  return poppedValue;
};