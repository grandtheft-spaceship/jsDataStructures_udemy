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
  * Then, you need to change the listss **head pointer** to point at the New Head

### Using Add To Head
### Add To Tail
### Remove Head
### Remove Tail
### Search Method
