// Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// list class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // creates a new node
    let node = new Node(val);
    // if the list length is 0 add as head and tail
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // if there are already nodes n th list, add this as the new tail
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    // Increment length by 1
    this.length++;
    return this;
  }
}

let dList = new DoublyLinkedList();
console.log(dList.push(1));
console.log(dList.push(2));
