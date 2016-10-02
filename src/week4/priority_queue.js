/*  
  Data Structure Review
  Stack - Remove the item most recently added
  Queue - Remove the item least recently added
  Priority Queue - Remove the largest (or smallest) item
*/

/*
  Priority Queue API
    class MaxPQ
     void insert(key) - Insert key into pq
      key delMax() - return and remove the largest key
  boolean isEmpty() - is the pq empty?
*/

// can replace capacity with resizing arrays
function MaxPQ(capacity){
  this.pq = [];
}

MaxPQ.prototype.isEmpty = function(){
  return !this.pq.length;
};

MaxPQ.prototype.insert = function(key){
  this.pq.push(key);
};

MaxPQ.prototype.delMax = function(cb){
  var max = 0;

  for(var i = 1; i < this.pq.length; i++){
    if(cb(this.pg[max], this.pg[i])) max = i;
  }
  swap(this.pg[max], this.pg[this.pg.length - 1]);
  return this.pg[--this.pg.length];
};