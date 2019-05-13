class Queue {
  constructor() {
    this.queue = [];
  }

  print() {
    console.log(this.queue);
  }

  add(value) {
    this.queue.push(value);
  }

  remove() {
    this.queue.shift();
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    }
    return false;
  }
}

const newQueue = new Queue();
console.log(newQueue);
newQueue.add(2);
newQueue.add(3);
newQueue.remove();
console.log(newQueue.size());
console.log(newQueue.isEmpty());
