/*
  class StackOfStrings - LIFO
    void    push(string item) - insert new string onto stack
    String  pop() - remove and return the string
    boolean isEmpty() - is the stack empty?

  Considerations:

    Overflow/Underflow:
      • Overflow - use resizing array for array implementation
      • Underflow - throw exception if pop from an empty stack
    Null items:
      • Allow null items to be inserted
    Loitering:
      • Holding a reference to an object when it is no longer needed
      ex of loitering: 
        function pop(){
          return s[--N];
        }

      ex to avoid loitering:
        function pop(){
          var item = s[--N];
          s[N] = null;
          return item;
        }
*/

function Node(value=null, next=null){
  this.value = value;
  this.next = next;
}

function StackOfStrings(head=null){
  this.head = head;
}

StackOfStrings.prototype.isEmpty = function(){
  return this.head === null;
};

StackOfStrings.prototype.push = function(value){
  var NewNode = new Node(value);
  var OldNode = this.head;
  if(this.head === null) {
    this.head = NewNode;
  }else{
    this.head = NewNode;
    this.head.next = OldNode;
  }
  return this;
};

StackOfStrings.prototype.pop = function(){
  if(this.head === null) return 'Empty Stack';
  var OldValue = this.head.value;

  if(this.head.next === null){
    this.head = null;
  }else{
    this.head = this.head.next;
  }

  return OldValue;
};

// not tested
StackOfStrings.prototype.flattenValues = function(){
  if(this.head === null) return 'Empty Stack';
  var acc = '';
  var currNode = this.head;
  while(currNode){
    acc += currNode.value;
    currNode = currNode.next;
  }
  return acc;
};


module.exports = {Node, StackOfStrings};