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

  // function used to add nodes to the end of the list
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
    return this;
  }

  // function used to grab and remove the last value from the list
  pop() {
    // if there are no nodes return undefined
    if (!this.head) {
      return undefined;
    }
    // set the value of the current node
    let current = this.head;
    let pre = current;
    // loop through the list until we reach the tail
    while (current.next) {
      pre = current;
      current = current.next;
    }
    // sets the 2nd to last node to be the new tail
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the old tail
    return current;
  }
}

var list = new SinglyLinkedList();
list.push('hello');
list.push('ok');
list.push('goodbye');
console.log();
console.log(list);
console.log('pop');
console.log(list.pop());
console.log('pop');
console.log(list);
console.log('pop');
console.log(list.pop());
console.log('pop');
console.log(list);
console.log('pop');
console.log(list.pop());
console.log('pop');
console.log(list);
