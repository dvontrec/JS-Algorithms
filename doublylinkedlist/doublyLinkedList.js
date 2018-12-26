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

  get(index) {
    // check if the index is valid
    if (index < 0 || index >= this.length) {
      return null;
    }
    // create a variable for found node
    let foundNode;
    let counter;
    // if index is less than or equal to half the length
    if (index <= this.length / 2) {
      foundNode = this.head;
      // set a counter at 0
      counter = 0;
      // loop through nodes until the correct node is found
      while (counter < index) {
        foundNode = foundNode.next;
        counter++;
      }
    } else {
      foundNode = this.tail;
      // set a counter at length -1
      counter = this.length - 1;
      // loop through nodes until the correct node is found
      while (counter > index) {
        foundNode = foundNode.prev;
        counter--;
      }
    }
    return foundNode;
  }
}

let dList = new DoublyLinkedList();
dList.push(0);
dList.push(1);
dList.push(2);
dList.push(3);
dList.push(4);
dList.push(5);
dList.push(6);
dList.push(7);
console.log(dList.get(7));
// console.log(dList);
