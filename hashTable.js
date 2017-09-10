function HashTable(size) { // 'size' will determine how big table is / how many buckets we will have
  this.buckets = Array(size); // defines where the data of hash table will be stored
  this.numBuckets = this.buckets.length; // keeps track of how many buckets our hash table has
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null; // refers to the next node in that specific bucket in case we end up having collisions
}
