/*
  class StackOfStrings - FIFO
    void    enqueue(string item) - insert new string onto queue
    String  dequeue() - remove and return the string
    boolean isEmpty() - is the queue empty?

    Maintain pointer to first and last nodes in linked list
    insert/remove from opposite ends
*/

function Node(value=null, next=null){
  this.value = value;
  this.next = next;
}

function LinkedQueueOfStrings(head=null, tail=null){
  this.head = head;
  this.tail = tail;
}

LinkedQueueOfStrings.prototype.isEmpty = function(){
  return this.head === null;
};

LinkedQueueOfStrings.prototype.enqueue = function(value){
  var NewNode = new Node(value);
  var OldTail = this.tail;

  if(this.head === null){
    this.head = NewNode;
    this.tail = this.head;
  }else{
    OldTail.next = NewNode;
    this.tail = NewNode; 
  }

  return this;
};

LinkedQueueOfStrings.prototype.dequeue = function(){
  if(this.head === null) return 'Empty Queue';
  if(this.head.next === null) this.tail = null;
  
  var OldValue = this.head.value;
  this.head = this.head.next;
  return OldValue;
};

module.exports = {LinkedQueueOfStrings, Node};