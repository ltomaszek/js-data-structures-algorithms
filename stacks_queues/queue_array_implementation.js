class Queue {
  constructor(value=null) {
    this.data = [];
    this.first = -1;   // cursor with first element
    this.last = -1;    // cursor with last element
  }

  enqueue(value) {
    if (this.isEmpty()) {

    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return toReturn;
  }

  peek() {
    return this.isEmpty() ? null : this.first.value;
  }

  isEmpty() {
    return this.first == -1;
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