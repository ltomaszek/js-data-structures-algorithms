// EXERCISE: Implement Queue using Stacks

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Stack {
  constructor(value=null) {
    if (value != null)
      this.currNode = new Node(value); 
  }

  peek() {
    return this.isEmpty() ? null : this.currNode.value;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const valueToReturn = this.currNode.value;
    this.currNode = this.currNode.prev;
    if (!this.isEmpty()) {
      this.currNode.next = null;
    }
    return valueToReturn;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.currNode = new Node(value);
    } else {
      this.currNode.next = newNode;
      newNode.prev = this.currNode;
      this.currNode = newNode;
    }
  }

  isEmpty() {
    return this.currNode == null;
  }
}

// EXERCISE: Implement Queue using Stacks

class Queue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  dequeue() {
    if (this.dequeueStack.isEmpty()) {
      this._stackPush();
    }
    return this.dequeueStack.pop();
  }

  enqueue(value) {
    this.enqueueStack.push(value);
  }

// pushes items from enqueueStack to dequeue Stack
  _stackPush() {
    while (this.enqueueStack.isEmpty() == false) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
  }

  isEmpty() {
    return this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty();
  }

  peek() {
    if (this.dequeueStack.isEmpty()) {
      this._stackPush();
    }
    return this.dequeueStack.peek();
  }
}

queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

while (queue.isEmpty() == false) {
  console.log(queue.dequeue())
}
console.log(queue.peek());
console.log(queue.dequeue());

queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(33);
while (queue.isEmpty() == false) {
  console.log("Peek: " + queue.peek() + " | Dequeue: " + queue.dequeue());
}
console.log(queue.peek());
console.log(queue.dequeue());