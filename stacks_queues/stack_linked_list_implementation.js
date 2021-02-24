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

stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
stack.push(6);

while(stack.isEmpty() == false) {
  console.log(stack.pop());
}

console.log("-----")
stack.push(100);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());