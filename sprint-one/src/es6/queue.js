class Queue {
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
  enqueue (value) {
    var size = this.size();
    this.storage[size] = value;
  }
  dequeue () {
    var size = this.size();
    var dequeuedValue = this.storage[0];
    for (var i = 1; i < size; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[size - 1];
    return dequeuedValue;
  }
}
