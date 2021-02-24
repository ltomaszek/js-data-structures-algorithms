class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  insert(value) {
    this.heap.push(value)
    this._swapUp(this.size() - 1)
  }

  removeMin() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size() == 1) {
      return this.heap.pop()
    }
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    
    if (this.size() > 1) {
      this._swapDown(0);
    }
    return min;
  }

  _leftChildIdx(parentIdx) {
    return 2 * parentIdx + 1;
  }

  _rightChildIdx(parentIdx) {
    return 2 * parentIdx + 2;
  }

  _parentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2)
  }

  _isLeaf(idx) {
    return this._leftChildIdx(idx) >= this.size();
  }

  _swapValue(idx1, idx2) {
    let tempValue = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = tempValue;
  }

/**
 * Swaps the value as far up as it belongs
 */
  _swapUp(idx) {
    let parentIdx = this._parentIdx(idx);

    // current idx must be greated than 0, otherwise it's the first element and no swaping possible
    while (idx > 0 && this.heap[idx] < this.heap[parentIdx]) {
      this._swapValue(idx, parentIdx);
      // update indexes
      idx = parentIdx;
      parentIdx = this._parentIdx(idx);
    }
  }

  /**
 * Swaps the value as far down as it belongs
 */
  _swapDown(idx) {
    while (!this._isLeaf(idx)) {
      let leftChildIdx = this._leftChildIdx(idx);
      let rightChildIdx = this._rightChildIdx(idx);
      let rightExist = rightChildIdx < this.size();

      if (!rightExist || this.heap[leftChildIdx] <= this.heap[rightChildIdx]) {
        // left child is smaller than right child
        // check if you should swaping
        if (this.heap[leftChildIdx] < this.heap[idx]) {
          this._swapValue(idx, leftChildIdx);
          idx = leftChildIdx;
        } 
        else {
          return;
        }
      }
      else {
        // right child is smaller than left child
        if (this.heap[rightChildIdx] < this.heap[idx]) {
          this._swapValue(idx, rightChildIdx);
          idx = rightChildIdx;
        }
        else {
          return;
        } 
      }
    }
  }
}


minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(8);
minHeap.insert(9);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(1);
minHeap.insert(11);
minHeap.insert(5);
minHeap.insert(4);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(6);

console.log(minHeap);
console.log();

while (!minHeap.isEmpty()) {
  console.log(minHeap.removeMin());
}