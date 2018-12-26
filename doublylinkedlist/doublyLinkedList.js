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

  pop() {
    // if the list is empty return undefined
    if (this.length === 0) {
      return undefined;
    }
    // Save the old tail to a variable
    let oldTail = this.tail;
    // if the length is 1 set the head and the tail to be 1
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
}

let dList = new DoublyLinkedList();
console.log(dList.push(1));
console.log(dList.push(2));
console.log(dList.pop());
console.log(dList);
