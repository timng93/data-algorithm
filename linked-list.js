// Simple Implementation of a Linked List

class LinkedList {
  constructor(head, tail) {
    this.head = this.tail = null;
  }

  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      this.tail.prev = oldTail;
      oldTail.next = this.tail;
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail;
    }
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}
