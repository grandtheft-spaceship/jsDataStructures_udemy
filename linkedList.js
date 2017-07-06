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

// Node constructor
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
