class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
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
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//     9
//  4     20
//1  6  15  170

function inOrder(node, str_representation) {
  if (node == null) return str_representation;
  str_representation = inOrder(node.left, str_representation);
  str_representation += node.value + ' ';
  str_representation = inOrder(node.right, str_representation);
  return str_representation;
}

function preOrder(node, str_representation) {
  if (node == null) return str_representation;
  str_representation += node.value + ' ';
  str_representation = preOrder(node.left, str_representation);
  str_representation = preOrder(node.right, str_representation);
  return str_representation;
}

function postOrder(node, str_representation) {
  if (node == null) return str_representation;
  str_representation = postOrder(node.left, str_representation);
  str_representation = postOrder(node.right, str_representation);
  str_representation += node.value + ' ';
  return str_representation;
}

console.log(inOrder(tree.root, ''))
console.log(preOrder(tree.root, ''))
console.log(postOrder(tree.root, ''))