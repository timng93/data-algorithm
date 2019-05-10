class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getCurrentNode(data, left = null, right = null) {
    let Node = {data, left, right};

    let currentNode;

    if (!this.root) {
      this.root = Node;
    } else {
      currentNode = this.root;
      while (currentNode) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = Node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = Node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log("Try a different value please");
          break;
        }
      }
    }
  }
}

let Tree = new BinarySearchTree();

Tree.getCurrentNode(10);

Tree.getCurrentNode(2);

Tree.getCurrentNode(12);

console.log(Tree);
