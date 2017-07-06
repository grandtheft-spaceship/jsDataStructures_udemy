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

// Node constructor
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
