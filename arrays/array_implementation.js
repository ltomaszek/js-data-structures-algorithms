// Implementation of an Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItemsToLeft(index);
    return item;
  }

  shiftItemsToLeft(startIndex) {
    for (let i = startIndex; i < this.length - 1; i++)
    {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('you');
newArray.push('are');
newArray.push('not');
newArray.push('nice');
newArray.push('!');
console.log(newArray.data);

newArray.pop();
console.log(newArray.data);

newArray.delete(2);
console.log(newArray.data);
