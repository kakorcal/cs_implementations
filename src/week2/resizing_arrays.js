/*
  Array implementation of stack
  • Use array s[] to store N items on stack
  • push - add new item at s[N]. double size of array s[] when array is full.
  • pop - remove item from s[N-1]. halve size of array s[] when array is 1/4 full.
*/

function ResizingArrayStackOfStrings(){
  this.list = [];
  this.count = 0;

  this.resize = function(capacity){
    var copy = new Array(capacity).fill(null);

    for(var i = 0; i < this.count; i++){
      copy[i] = this.list[i];
    }

    this.list = copy;
  };
}

ResizingArrayStackOfStrings.prototype.isEmpty = function(){
  return this.count === 0;
};

ResizingArrayStackOfStrings.prototype.push = function(value){
  this.list[this.count++] = value;
  if(this.count === this.list.length) this.resize(2 * this.list.length);
  return this;
};

ResizingArrayStackOfStrings.prototype.pop = function(){
  if(this.count === 0) return 'Empty Stack';

  var oldValue = this.list[--this.count];
  this.list[this.count] = null;

  if(this.count === this.list.length / 4) this.resize(this.list.length / 2);
  return oldValue;
};

module.exports = {ResizingArrayStackOfStrings};