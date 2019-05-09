// Time Complexity is O(1)- Search, Insert, Delete
// Hash function converts String to Number
// Collision- String to Same Number- Same Index for An Array

//Construct Hash Table
class HashTable {
  constructor(size = 42) {
    this.size = size;
    this.buckets = new Array(size);
  }

  // Set Up Hash Function
  hash(key) {
    return key.toString().length % this.size;
  }

  // Insert new data to buckets
  set(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    for (let bucket of this.buckets[index]) {
      if (bucket[0] == key) {
        return bucket[1];
      }
    }
  }
}

const hasht = new HashTable(10);

hasht.set("userId3", "pop");

console.log(hasht);

const value = hasht.get("userId3");

console.log(value);
