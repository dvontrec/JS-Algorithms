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

  shift() {
    // check if list is empty
    if (this.length === 0) {
      return undefined;
    }
    // save the head in a variable
    let oldHead = this.head;
    // check if length is one
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update head
      this.head = oldHead.next;
      //sever connections
      this.head.prev = null;
      oldHead.next = null;
    }
    // Decrement the length
    this.length--;
    // return the old head
    return oldHead;
  }

  unShift(val) {
    // create a new node from the passed in value
    let newNode = new Node(val);
    // Check if the list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    // return the list
    return this;
  }
}

let dList = new DoublyLinkedList();
dList.push(1);
dList.push(2);
dList.push(3);
console.log(dList.unShift(0));
// console.log(dList);
