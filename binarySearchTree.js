// Constructor function to represent Binary Search Tree
// Every node we create for the BinarySearchTree will be made with this constructor
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) { // Check if desired value we want to insert is less than or greater than the current node's value
    if (!this.left) this.left = new BinarySearchTree(value); // IF there is NO left child of current node, THEN set left child to be a new BinarySearchTree of desired value
    else this.left.insert(value); // RECURSIVELY call 'insert' method on left child node
  } else if (value > this.value) { // We could just use an 'else' statement here, but we are using 'else if' to be explicit
    if (!this.right) this.right = new BinarySearchTree(value); // IF there is NO right child of current node, THEN set right child to be a new BinarySearchTree of desired value
    else this.right.insert(value); // RECURSIVELY call 'insert' method on right child node
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) return true; // Check if desired value is equal to current node's value
  else if (value < this.value) { // Check if desired value is less than current node's value
    if (!this.left) return false; // If there is NO left child node, RETURN FALSE
    else return this.left.contains(value); // ELSE RECURSIVELY call 'contains' method on left child node
  }
  else if (value > this.value) { // Check if desired value is greater than current node's value
    if (!this.right) return false; // If there is NO right child node, RETURN FALSE
    else return this.right.contains(value); // ELSE RECURSIVELY call 'contains' method on right child node
  }
};

BinarySearchTree.prototype.depthFirstTraversal = function(iteratorFunc, order) { // iteratorFunc() is a function that will be a function that logs nodes to the console // REFACTOR: adding 'order' parameter
  if (order === 'pre-order') iteratorFunc(this.value); // IF PRE-ORDER, start with PARENT NODE, then LEFT BRANCH, last RIGHT BRANCH
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order); // RECURSIVELY will touch each node of the binary search tree in order from least to greatest
  if (order === 'in-order') iteratorFunc(this.value); // IF IN-ORDER, start with LEFT BRANCH, then PARENT NODE, then RIGHT BRANCH
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value); // IF POST-ORDER, start with LEFT BRANCH, then RIGHT BRANCH, then PARENT NODE
};

BinarySearchTree.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this]; // 'this' refers to the ROOT NODE of the BinarySearchTree
  while (queue.length) {  // LOOP will continue to run as long as the queue is NOT empty
    var treeNode = queue.shift(); // Takes the first node out of the queue and store it in treeNode variable
    iteratorFunc(treeNode); // OUTPUT value of treeNode
    if (treeNode.left) queue.push(treeNode.left); // Store LEFT child node into QUEUE
    if (treeNode.right) queue.push(treeNode.right); // Store RIGHT child node into QUEUE
  }
};

BinarySearchTree.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BinarySearchTree.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

function iteractorFuncDepth(value) { // This is the function that we pass into the depthFirstTraversal() method as its argument
  console.log(value);
};

function iteractorFuncBreadth(node) { // This is the function that we pass into the breadthFirstTraversal() method as its argument
  console.log(node.value)
};


// TEST DATA FOR NODE REPL
// var bst = new BinarySearchTree(50);
// bst.insert(30)
// bst.insert(70)
// bst.insert(20)
// bst.insert(45)
// bst.insert(60)
// bst.insert(100)
// bst.insert(10)
// bst.insert(35)
// bst.insert(59)
// bst.insert(85)
// bst.insert(105)
