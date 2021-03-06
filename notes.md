# Learning Data Structures in JavaScript from Scratch
## Introduction to Data Structures and Important Concepts
### What are Data Structures?

* A way of organizing data that is stored in a computer or database
* There are many different types of data structures
* Each type of data structure represents a different way of **organizing** the data

**Why are there different types of data structures?**

* They all have different strengths and weaknesses
* Some are fast at **storing and recording data**, while others are not
* Some are fast at **searching and retrieving data**, while others are not

**Why are data structures important to know?**

* It can have a big impact on how **performant, quick, and efficiently** a program runs
* Reinforce knowledge of JavaScript algorithms and other important concepts

## Linked Lists
### What is a Linked List?

* **Linked List** - a list of elements, called **nodes**, that are connected together in a linear pattern
* Two types of linked lists:
  * **Singly** Linked List
    * Each node only has reference to the node AFTER it
  * **Doubly** Linked List
    * Each node has reference to both the nodes BEFORE and AFTER it
* As a whole, the linked list only needs to know about two nodes for it to function correctly
  * The **head node**
  * The **tail node**
  * Both nodes are referenced using the **head pointer** and **tail pointer**, respectfully
* Operations for a linked list
  * Adding a node to the head of the linked list
  * Adding a node to the tail of the linked list
  * Removing the head
  * Removing the tail
  * Search through linked list
  * NOTE: The head and tail pointers change which node they are pointing to as nodes get added and removed
* Node
  * Object Literal which contains three properties:
    * **Value**
    * **next**
    * **prev**

### Linked List and 'Node' Constructor Functions
### Add To Head - part 1
### Add To Head - part 2

* If the Linked List is empty, when you add the first node, both the head and tail will point to the new node that you are adding
* If the Linked List is NOT empty, you need to connect the Old Head's **previous property to the New Head** and connect the New Head's **next property to the Old Head**  
  * Then, you need to change the list's **head pointer** to point at the New Head

### Big O Notation and Calculating the Runtime of a Function

* Notation used to classify how scalable an algorithm or function is
  * Estimates the **worst case runtime** of an algorithm
  * How long the algorithm takes to complete based on the input size
* **Constant Runtime** - `O(1)`
* **Linear Runtime** - `O(n)`
* **Exponentional Runtime** - `O(n^2)` *O of n squared*
  * Inefficient when you start having larger inputs
* **Logarithmic Runtime** - `O(log n)`
  * Highly efficient
  * Example: **binary search**
    * With every operation performed, you cut the input in half

### Linked List Wrap-Up

* Linked Lists have a **constant time, or O(1)** runtime when adding/removing nodes from the **head or tail**
* Searching a linked list has a **linear runtime, or O(n)**
* Practical Use Case:
  * Online gaming
  * Poker, board games, dominoes
* Linked Lists are good for **memory management**
  * They allow you to break up a lot of data that does not have to be stored together

## Binary Search Tree
### What is a Binary Search Tree?

* A **binary search tree** is a collection of nodes that are all connected together in a certain way
* Each **node** in a binary search tree will have **up to 2 child nodes**, a **left node** and a **right node**
  * Each node contains some data, or value, similar to a linked list
* All left nodes will have a **lesser or equal value than its parent node** and all right nodes will have a **greater value than its parent node**
* Each node is basically a **sub-tree** because each node can be thought of as its own **root node** that has up to 2 children nodes
  * This characteristic is what makes a binary search tree
* **Desired Functionality For Binary Search Tree**
  * **Insert**
  * **Contains**
  * **Depth First Traversal**
    * Pattern for traversing the tree
    * Starts at the top and follows through each branch all the way to its bottom
  * **Breadth First Traversal**
    * Pattern for traversing the tree
    * Starts at the top, but goes across each level before going down to the next level

### Recursion - Part 1

* **Recursion** is when a function calls itself
* All recursive functions will have two cases; a **recursive case** and a **base case**

### Recursion - Part 2 and the Call Stack

* The **call stack** represents what order functions are called in and what variables they are being called with

### Insert Method
### Testing Insert
### Contains Method
### Testing Contains
### Depth First Traversal - In-Order

* This method will travel through each of the nodes in the binary search tree and call the `iteratorFunc()` on each of those nodes
* The method will begin **traversing the tree at the top and follow each branch to its bottom before it moves on to the next branch** ("depth-first")
* There are a few different variations of this type of traversal; the differentiator being in **what order they touch each node of the tree**
* **In-Order** - Touches each node of the binary search tree in **order from least to greatest**
  * The `iteratorFunc()` will run **first on the LEFT child node, then on the PARENT node, then on the RIGHT child node**
  * We will *recursively* do this on all the sub-trees of the binary search treee

### Testing Depth First Traversal - In-Order

* Before testing out the `depthFirstTraversal` method, we need to write the logic for the `iteratorFunc` function
  * `iteratorFunc` will simply take a value as an argument and `console.log` that value

### Refactoring Depth First Traversal Method

* We can easily refactor the logic in the `depthFirstTraversal()` method so we can touch the nodes of the tree in different orders
* First, we will add an **order** parameter to the `depthFirstTraversal()` function:
  * The 3 possible values we can pass as this argument are:
    1. `in-order`
    2. `pre-order`
    3. `post-order`

### Depth First Traversal - Pre-Order
### Testing Depth First Traversal Pre-Order
### Depth First Traversal - Post-Order
### Breadth First Traversal - part 1

* Traverse through the whole tree, processing every node, but instead of going down every branch, it will **move down the tree by level**
  * First, process **parent node**, then both **left and right children**, etc.
* Useful for defining a *hierarchy* or level-of-command; such as ranks for employees of a company
* **Queue** - A list that follows a **first-in, first-out** rule
  * We will push elements through the back of the array and shift elements out of the front of the array
    * First, we'll shift elements out of the front of the queue, one at a time, run the `iteratorFunc` on that node, then push its child nodes into the back of the queue
    * Then, repeat these steps until all of the nodes are processed
      * This makes sure that we process all of the nodes, level-by-level, instead of branch-by-branch

### Breadth First Traversal - part 2
### Testing Breadth First Traversal
### Binary Search Tree - Independent Exercise

* `getMinVal()` - return smallest value in tree
  * The node with the **smallest** value in the tree will be the **farthest, left node**
* `getMaxVal()` - return largest value in tree
  * The node with the **larget** value in the tree will be the **farthest, right node**

### Binary Search Tree Wrap-up

* Used to store data because they are quick to search and retrieve data from
  * Also quick to insert and delete data
* Almost all the methods are utilizing the concept of "binary search"
  * For example, when looking for a value in a binary search tree (`contains()`), you start at the ROOT node and with every step towards a CHILD node, you essentially *throw away* half of the nodes in the tree
  * This is called **logarithmic runtime**, or `O(log n)`
* Faster than the runtime for a Linked List - `O(n)`
* **NOTE** Binary Search Trees are *most performant* when they are **balanced**
  * A **balanced** binary search tree means that *all, or most, of the nodes have both a left and right child*
    * Depending on the data you are using, you could potentionally end up with a tree where every node only having a right child node. Searching through this example would be similar to searching through a linked list
* Anything you want to use *binary-search* can use a *binary-search tree*

## Hash Table
### What is a Hash Table?

* Powerful data structures that provide **constant time lookup and insertion**
  * Lookup: `O(1)`
  * Insertion: `O(1)`
* Neither a Linked List or Binary Search Tree can provide that runtime
* Stores data in **key-value pairs**
  * The **key is a string**
  * The **value is any data-type**
* A *hash table* is a table of **pre-determined length** where each cell, or **buckets**, of the table holds a piece of data which **has a key and a value**
* We will **use an array as our table**, where **each index will be a bucket**
* Each piece of data that we insert into our table needs to be assigned to a different bucket
* To insert data into the hash table:
  * We are going to take the **key** and **hash it to a number**
  * When we create the actual hash table, we will *write a function that does this task*
* To retrieve data out of the hash table:
  * We will write a `get()` method that takes in the **key** of the desired data
  * We will, again, **hash the key** and look up the desired data in the array using the *hashed number**
    * The hash method we write should give us the same number as before when we first inserted the data into the hash table
* When multiple pieces of data wind up in the same table, it is called a **collision**
  * To handle **collisions**, we *form each bucket into a simple Linked List**
    * This way, if there is data already at the desired bucket, we can just *chain what we want to insert at the end of the linked list*
* **NOTE:** when iterating through *chains*, caused from *collisions*, the hash table loses it *constant runtime*
  * **HOWEVER** if you make the hash table correctly with many buckets and a good hashing function, the amount of collisions should be minimal
* The three functions our hash table will have are:
  * `insert()`
  * `get()`
  * `hash()`

### Hash Table and Hash Node Constructor Functions

* We need two constructor functions:
  * One for the table itself
  * One for the nodes that we will insert into the table

### CharCodeAt Method and Modulus Operator

* In JavaScript, **every character corresponds with a Unicode number**
* `charCodeAt(index)` - String method that gives Unicode number of a character
  * The `index` argument will let the `charCodeAt()` method know which character in the string to turn into a number
* The modulus `%` operator returns the **remainder** of a division operation

### Hash Method

* Convert **key** of data into a unique number that will correspond into which bucket it will be stored in the Hash Table

### Insert Method

* Convert a **key-value pair** into a **hash node** and place that node into the **correct bucket of the hash table**

### Testing Insert Method
### Refactoring Insert Method

* We want to refactor the `insert()` method to not only insert new data, but to also *modify current data* if needed
* Because we are always checking `currentNode.next`; we will actually never get to check if the first node in table is the one we are targeting
  * To fix this, we are going to add an `else if` statement

### Testing Refactored Insert Method
### Get method
### Hash Table - Independent Exercise

* `retrieveAll()` - return an array of all the hash nodes in the Hash Table
  * Should return every node, even the ones that are chained in the same bucket

### Hash Table Wrap-up

* Incredibly performant data structure
* Pros:
  * Constant runtime lookup (`O(1)`)
  * Constant runtime insertion (`O(1)`)
* Practical Uses:
  * Email provider storing addresses
  * Users of an application
* Cons:
  * Data doesn't store references to other pieces of data in the data structure
