// code adapted into ES6 classes from http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.length++;
      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return node;
  }

  search(position) {
    let currentNode = this.head;
    let length = this.length;
    let count = 1;
    let msg = {failure: 'Failure: non-existant node in this list'};

    if (length === 0 || position < 1 || position > length) {
      throw new Error(msg.failure); 
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  remove(position) {
    let currentNode = this.head;
    let length = this.length;
    let count = 0;
    let msg = {failure: 'Failure: non-existant node in this list'};
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;

    if (position < 0 || position > length) {
      throw new Error(msg.failure);
    }

    if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this.length--;
      return deletedNode;
    }

    while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }
    
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length--;
    return deletedNode;
  }

  insertAfter(position, value) {
    let node = new Node(value);
    let foundNode = this.search(position);
    let length = this.length;
    let count = 0;
    let msg = {failure: 'Failure: non-existant node in this list'};
    let nextNode = null;

 
    if (length === 0 || position < 1 || position > length) {
      throw new Error(msg.failure); 
    }

    // add node onto end of the linked list if last position is passed 
    if (!foundNode.next) {
      node = this.add(value);
      return node;
    }

    nextNode = foundNode.next;
    node.next = nextNode;
    foundNode.next = node;
    this.length++;

    return node;
  }
}
