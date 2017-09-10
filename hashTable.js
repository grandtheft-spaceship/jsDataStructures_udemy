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
