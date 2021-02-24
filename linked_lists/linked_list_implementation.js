class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.length = 1;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;  
    this.length++;
    return this;
  }

  prepend(value) {
    const oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
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
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = new Node(value);
    leader.next.next = holdingPointer;
    this.length++;
    return this;
  }

   remove(index) {
    if (index < 0 || index >= this.length) {
      throw 'Invalid index';
    }
    if (index == 0) {
      this.head = this.head.next;
    }
    else {
      let leader = this.traverseToIndex(index - 1);
      leader.next = leader.next.next;
      if (index == this.length - 1) {
        this.tail = leader;
      }
    }
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let currNode = this.head;
    while (index > 0) {
      currNode = currNode.next;
      index--;
    }
    return currNode
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
      curr.next = prev;
      prev = curr;
      curr = next;
    }
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

console.log("Remove:");
list.remove(0);
list.remove(list.length-1);
list.prepend(-111);
list.append(55555);

list.printList();

console.log("Reverse:");
list.reverse();
list.printList();

console.log("Reverse:");
list.reverse();
list.printList();