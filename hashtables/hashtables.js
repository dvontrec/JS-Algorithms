class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  // Hash function that converts string keys to array indexes
  _hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }

  set(key, value) {
    // gets index for the hashed key
    let index = this._hash(key, this.keyMap.length);
    // If the index is empty
    if (!this.keyMap[index]) {
      // create an array for the index
      this.keyMap[index] = [];
    }
    // push the key and value to the array
    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key) {
    // gets the index of the hashed key
    let index = this._hash(key, this.keyMap.length);
    // retireves the correct array for the index
    let arr = this.keyMap[index];
    // creates a value to be returned
    let val = undefined;
    // loop through the array for the key
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === key) {
        val = arr[i][1];
      }
    }
    return val;
  }
}

let hashTable = new HashTable(17);
hashTable.set('pink', '#0008b');
hashTable.set('salmon', '#fa8072');
hashTable.set('maroon', '#800000');
hashTable.set('yellow', '#FFFF00');
hashTable.set('olive', '#808000');
hashTable.set('lightcoral', '#F08080');
hashTable.set('mediumviioletred', '#C71585');
hashTable.set('plum', '#DDA0DD');

console.log(hashTable.get('pink'));
console.log(hashTable.get('salmon'));
