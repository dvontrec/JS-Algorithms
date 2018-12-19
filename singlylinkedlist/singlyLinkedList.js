// Create the Node class
class Node {
  // Create the constructor for the node
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Defines linked list class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create a node from the value
    let node = new Node(val);
    // if this is the first node set it as the head
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }
}

var list = new SinglyLinkedList();
list.push('hello');
list.push('ok');
list.push('goodbye');
console.log(list);
console.log(list.head.next);
