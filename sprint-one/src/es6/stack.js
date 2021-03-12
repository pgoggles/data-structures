class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  size () {
    var size = 0;
    for (var key in this.storage) {
      size ++;
    }
    return size;
  }

  push (value) {
    var size = this.size();
    this.storage[size] = value;
  }

  pop () {
    var size = this.size();
    var poppedValue = this.storage[size - 1];
    delete this.storage[size - 1];
    return poppedValue;
  }
}