class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    // checks for repeat
    if (val === this.value) {
      console.log('this value is already in the tree');
    }
    // checks for less than
    if (val < this.value) {
      if (this.left === null) {
        this.left = new Node(val);
      } else {
        this.left.insert(val);
      }
    }
    // checks for greater than
    if (val > this.value) {
      if (this.right === null) {
        this.right = new Node(val);
      } else {
        this.right.insert(val);
      }
    }
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // Creata a new node
    let newNode = new Node(val);
    // if there is no root set a root
    if (!this.root) {
      this.root = newNode;
    } else {
      // begins the recursive node insert
      this.root.insert(val);
    }
    // return the tree
    return this;
  }

  find(val) {
    // Check for root
    if (!this.root) return false;
    // set the curent node
    let current = this.root;
    // loop till found
    while (current) {
      // equal
      if (current.value === val) {
        return true;
      }
      // greater than
      else if (current.value > val) {
        current = current.left;
      }
      // less than
      else if (current.value < val) {
        current = current.right;
      }
    }
    return false;
  }
}
