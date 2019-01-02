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
}

let bh = new MaxBinaryHeap();
bh.values = [41, 39, 33, 18, 27, 12];
console.log(bh.insert(55)); // [ 55, 39, 41, 18, 27, 12, 33 ]
