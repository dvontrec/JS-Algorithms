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

  // function used to grab and remove the first value from the list
  shift() {
    // if there is no head return undefined
    if (!this.head) {
      return undefined;
    }
    let head = this.head;
    this.head = this.head.next;
    this.length--;
    // if there is no head change the tail to null
    if (!this.head) {
      this.tail = null;
    }
    // return the old tail
    return head;
  }

  // function used to add a node to the beginnning of a list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push('hello');
list.push('ok');
list.push('goodbye');
// console.log();
// console.log(list);
// console.log('pop');
// console.log(list.pop());
// console.log('pop');
// console.log(list);
// console.log('pop');
// console.log(list.pop());
// console.log('pop');
// console.log(list);
// console.log('shift');
// console.log(list.pop());
// console.log('pop');
// console.log(list);
// console.log();
// console.log();
// console.log();
// console.log();
// list.push('hello');
// list.push('ok');
// list.push('goodbye');
// console.log();
// console.log(list);
// console.log('shift');
// console.log(list.shift());
// console.log('shift');
// console.log(list);
// console.log('shift');
// console.log(list.shift());
// console.log('shift');
// console.log(list);
// console.log('shift');
// console.log(list.shift());
// console.log('shift');
// console.log(list);
list.unshift('hey');
console.log(list);
console.log(list.head);
