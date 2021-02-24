class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value=null) {
    this.first = value ? new Node(value) : null;
    this.last = this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const toReturn = this.first.value;
    this.first = this.first.next;
    return toReturn;
  }

  peek() {
    return this.isEmpty() ? null : this.first.value;
  }

  isEmpty() {
    return this.first == null;
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