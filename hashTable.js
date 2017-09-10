function HashTable(size) { // 'size' will determine how big table is / how many buckets we will have
  this.buckets = Array(size); // defines where the data of hash table will be stored
  this.numBuckets = this.buckets.length; // keeps track of how many buckets our hash table has
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null; // refers to the next node in that specific bucket in case we end up having collisions
}

HashTable.prototype.hash = function(key) {
  var total = 0; // Variable to keep track of unique number for key hash
  for (var i = 0; i < key.length; i++) { // Loop through each character of the key string
    total += key.charCodeAt(i); // Convert each character of key string to Unicode number and add them all together
  }
  var bucket = total % this.numBuckets; // Since total is probably larger than actual HashTable size, divide by number of buckets and use remainder to know which bucket to store data
  return bucket; // returns unique number that correlates to which bucket data is stored
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key); // Find out which bucket of the table our hash node will go in
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value); // If bucket is empty, create a new HashNode with key/value pair and insert at correct index`
  }
  else if (this.buckets[index].key ===  key) { // Check if first node in the table is the one we actually want to target
    this.buckets[index].value = value; // If YES, update value to value passed when insert() method was invoked
  }
  else { // desired bucket is NOT empty
    var currentNode = this.buckets[index]; // Store the current node, according to the index, into variable 'currentNode'
    while (currentNode.next) { // Continue loop until currentNode.next === false
      if (currentNode.next.key === key) { // Check if the data already exists within our Hash Table / For purpose of modifying existing data
        currentNode.next.value = value; // If data already exists in table, update value with the value that was passed into the insert() method
        return; // Will stop the rest of insert() method from running after updating value
      }
      currentNode = currentNode.next // Change currentNode value to the next node in the chain
    }
    currentNode.next = new HashNode(key, value); // Loop breaks, currentNode should equal last node in the chain, then set currentNode's next property to new node of key/value pair
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key); // Which bucket we want to look in
  if (!this.buckets[index]) return null; // Bucket is empty
  else {
    var currentNode = this.buckets[index];
    while (currentNode) { // Loop while there is a current node
      if (curretNode.key === key) return curretNode.value; // keys match and we have found desired node
      currentNode = currentNode.next; // IF NO MATCH, continue looking through the chain
    }
    return null; // If NO MATCH, return null
  }
};

HashTable.prototype.retrieveAll = function() {
  var allNodes = []; // New array to store all the hash table's NODES
  for (var i = 0; i < this.numBuckets; i++) { // Loop through all the buckets of the table
    var currentNode = this.buckets[i]; // Set current node
    while (currentNode) { // Loop through current node's chain to collect all nodes within the same bucket
      allNodes.push(currentNode); // store all the nodes that are chained together within the same bucket
      currentNode = currentNode.next; // continue moving down the chain until there are no more nodes
    }
  }
  return allNodes; // return array containing all the hash table's nodes
}
