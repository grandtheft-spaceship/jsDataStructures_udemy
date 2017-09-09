// Constructor function to represent Binary Search Tree
// Every node we create for the BinarySearchTree will be made with this constructor
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // Check if desired value we want to insert is less than or greater than the current node
  if (value < this.value) {
    if (!this.left) this.left = new BinarySearchTree(value); // IF there is NO left child of current node, THEN set left child to be a new BinarySearchTree of desired value
    else this.left.insert(value); // RECURSIVELY call 'insert' method on left child node
  } else if (value > this.value) { // We could just use an 'else' statement here, but we are using 'else if' to be explicit
    if (!this.right) this.right = new BinarySearchTree(value); // IF there is NO right child of current node, THEN set right child to be a new BinarySearchTree of desired value
    else this.right.insert(value); // RECURSIVELY call 'insert' method on right child node
  }
};
