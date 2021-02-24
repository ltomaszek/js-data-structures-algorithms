class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set(key, value) { // O(1)
    let address = this._hash(key);
    
    if (!this.data[address]) {
      this.data[address] = [];
    } 
    this.data[address].push([key, value]);
  }

  get(key) {    // O(1) - if no collisions
    const hash = this._hash(key);
    const currentBucket = this.data[hash];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (currentBucket) {
        for (let j = 0; j < currentBucket.length; j++) {
          keys.push(currentBucket[j][0]);
        }
      }
    }
    return keys;
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}


const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', '9');
myHashTable.set('oranges', 7);
myHashTable.set('peaches', 33);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));

// addes the same key - and probably should update the value of the key
myHashTable.set('apples', 55);
// returns the first 'apples' value - 9 NOT 55
console.log(myHashTable.get('apples'));

console.log(myHashTable.get("not existing"));
console.log(myHashTable.data);
console.log("keys: " + myHashTable.keys());