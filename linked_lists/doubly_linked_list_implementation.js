class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this._connectNodes(this.tail, newNode); 
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const oldHead = this.head;
    this.head = new Node(value);
    this._connectNodes(this.head, oldHead);
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw 'Invalid index';
    }
    let curr = this.head;
    while (index > 0) {
      curr = curr.next;
      index--;
    }
    return curr.value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw 'Invalid index';
    }
    if (index == 0) {
      return this.prepend(value);
    }
    else if (index == this.length) {
      return this.append(value);
    }
    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;
    const newNode = new Node(value);
    this._connectThreeNodes(leader, newNode, follower);
    this.length++;
    return this;
  }

   remove(index) {
    if (index < 0 || index >= this.length) {
      throw 'Invalid index';
    }
    if (index == 0) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    else if (index == this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    else {
      let leader = this._traverseToIndex(index - 1);
      this._connectNodes(leader, leader.next.next);
    }
    this.length--;
    return this;
  }

  reverse() {
    if (this.length < 2) {
      return;
    }
    let prev = null;
    let curr = this.head;
    
    this.head = this.tail;
    this.tail = curr;

    while (curr != null) {
      let next = curr.next;
      this._connectNodes(curr, prev);
      prev = curr;
      curr = next;
    }

    this.head.prev = null;
    this.tail.next = null;
  }

  _traverseToIndex(index) {
    let currNode = this.head;
    while (index > 0) {
      currNode = currNode.next;
      index--;
    }
    return currNode
  }

  _connectNodes(node1, node2) {
    if (node1 != null) {
      node1.next = node2;
    }
    if (node2 != null) {
      node2.prev = node1;
    }
  }

  _connectThreeNodes(node1, node2, node3) {
    this._connectNodes(node1, node2);
    this._connectNodes(node2, node3);
  }

  printList() {
    const array = [];
    let curr = this.head;
    while (curr != null) {
      array.push(curr.value);
      curr = curr.next;
    }
    console.log(array);
  }
}

console.log("Append and prepend:");
list = new LinkedList(10);
list.append(20).append(30);
list.prepend(9);
list.prepend(8).prepend(7);
list.append(100);

list.printList();

console.log("Inserting:")
list.insert(0, 0);
list.insert(list.length, 10000);
list.insert(1, 1000).insert(3, 3000).insert(5,5000).insert(list.length-1, 9000);

list.printList();

console.log("Remove:")
list.remove(3);
list.remove(0);
list.remove(list.length-1);
list.prepend(-111);
list.append(55555);

list.printList();

// TESTING WITH LOOPS
console.log("1 -> last:")
let head = list.head;
let tail = list.tail;

while (head != null) {
  console.log(head.value);
  head = head.next;
}

console.log("last -> 1:")
while (tail != null) {
  console.log(tail.value);
  tail = tail.prev;
}

console.log("END")

