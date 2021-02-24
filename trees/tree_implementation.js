class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }
  // remove

  remove(value) {
    if (!this.root) {
      return false;
    }
    const preHead = new Node(Math.min());
    let parent = preHead;
    let child = this.root;
    parent.right = child;

    while (child != null) {
      if (child.value == value) {
        return this._removeChild(parent, child);
      }
      parent = child;
      if (value < parent.value) {
        child = parent.left;
      } else {
        child = parent.right;
      }
    }
    this.root = preHead.right;
    return false;
  }

  _removeChild(parent, child) {
    if (child.left == null) {
      if (child.value < parent.value) {
        parent.left = child.right;
      } else {
        parent.right = child.right;
      }
      return true;
    }
    else if (child.right == null) {
      if (child.value < parent.value) {
        parent.left = child.left;
      } else {
        parent.right = child.left;
      }
      return true;
    }

    // child has two children
    // get the smallest node from right child
    let smallestParent = child;
    let smallestRight = child.right;
    while (smallestRight.left != null) {
      smallestParent = smallestRight;
      smallestRight = smallestRight.left;
    }

    // change values
    child.value = smallestRight.value;

    if (smallestRight.value < smallestParent.value) {
      smallestParent.left = smallestRight.right;
    } else {
      smallestParent.right = smallestRight.right;
    }
    return true;
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverse2(node) {
  console.log(node.value)
  node.left === null ? null : traverse(node.left);
  node.right === null ? null : traverse(node.right);
}

console.log(tree.remove(9))
console.log(tree.remove(6))
console.log(tree.remove(1))
console.log(tree.root)
console.log('end')