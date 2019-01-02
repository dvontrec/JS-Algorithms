// Creates a class for Max binary heaps (All nodes are smaller than the parent)
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    let values = this.values;
    values.push(val);
    let index = values.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (values[index] > values[parent]) {
      let temp = this.values[index];
      values[index] = values[parent];
      values[parent] = temp;
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    let values = this.values;
    //swap the first and last values
    let max = values[0];
    values[0] = values[values.length - 1];
    values.pop();
    let parentIndex = 0;
    // Buble down
    while (true) {
      let right = parentIndex * 2 + 1;
      let left = parentIndex * 2 + 2;
      let max;
      // if there is no right only compare to the left
      if (right >= values.length) {
        max = left;
      } else {
        max = values[left] >= values[right] ? left : right;
      }
      // if max is greater than parent
      if (values[max] > values[parentIndex]) {
        let temp = values[parentIndex];
        values[parentIndex] = values[max];
        values[max] = temp;
        parentIndex = max;
      } else break;
    }
    console.log(this.values);
    //Return old root
    return max;
  }
}

let bh = new MaxBinaryHeap();
bh.values = [41, 39, 33, 18, 27, 12];
console.log(bh.insert(55)); // [ 55, 39, 41, 18, 27, 12, 33 ]
console.log(bh.extractMax()); // 55
