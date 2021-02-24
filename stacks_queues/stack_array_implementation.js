class Stack {
  constructor(value=null) {
    this.data = [];
  }

  peek() {
    return this.isEmpty() ? null : this.data[this.data.length - 1];
  }

  pop() {
    return this.isEmpty() ? null : this.data.pop();
  }

  push(value) {
    this.data.push(value);
  }

  isEmpty() {
    return this.data.length == 0;
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