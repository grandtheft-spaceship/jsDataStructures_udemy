// Linked List constructor
function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToHead = function(value) {
  // 1. Create a new node
  var newNode = new Node(value, this.head, null);

  // 2. Check if Linked List already contains a HEAD node
    // 2a. IF - there is a current HEAD node, have that node's prev property point at newNode
    // 2b. ELSE - Have the Linked List's TAIL property pointer point at newNode
  this.head ? this.head.prev = newNode : this.tail = newNode;

  // 3. Assign Linked List Head pointer to point at newNode
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);

  this.tail ? this.tail.next = newNode : this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  // 1. Check IF Linked List is empty
  if (!this.head) return null;

  // 2. Save the value of current head node
  var headValue = this.head.value;

  // 3. Point the list's HEAD pointer to NEW HEAD node
  this.head = this.head.next;

  // 4. Add logic to accomodate if list only had one node
    // 4a. IF - there is a head node, set NEW HEAD's prev property to null
    // 4b. ELSE - set list TAIL to null; ( if list only had one node, list HEAD would already be set to null )
  this.head ? this.head.prev = null : this.tail = null;

  // 5. Return value of OLD HEAD
  return headValue;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;

  var tailValue = this.tail.value;

  this.tail = this.tail.prev;

  this.tail ? this.tail.next = null : this.head = null;

  return tailValue;
};

LinkedList.prototype.search = function(searchValue) {
  // 1. Create a variable, currentNode, whose value will change as we traverse through the linked list
  var currentNode = this.head;
  // 2. Being traversing the linked list
    // 2a. WHILE there is a valid currentNode, our loop will continue to run
    // 2b. If currentNode.next evaluates to null, our loop will break and we will return null
    // 2c. While traversing, we will check if currentNode's value is EQUAL to our searchValue; when that's true, we will return the matching value
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  // Function will take in a value and return an array containing all the indices where that value occurs in the linked list
  // 1. Create an empty array to store indices
  var index = 0;
  var indices = new Array;

  // 2. Being traversing linked list
  var currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === value) indices.push(index);
    index++;
    currentNode = currentNode.next;
  }
  return indices;
};

// Node constructor
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
