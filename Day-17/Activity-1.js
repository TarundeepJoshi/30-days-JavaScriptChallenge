class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const node1 = new Node(10);
const node2 = new Node(10, node1);

class LinkedList {
  constructor() {
    this.head = null;
  }

  addLast(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.display();
list.removeLast();
list.display();
