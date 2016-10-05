/*
  Complete Binary Tree - Perfectly balanced, except for bottom level
    • The height with N nodes is log N
  
  Binary Heap - Array representation of heap-ordered binary tree. Implements priority queues
  Heap-ordered binary tree
    • Keys in nodes
    • Parent key is always larger than children keys
    • Largest key is a[1], which is the root of binary tree
    • Can use array indices to move through tree
      - Parent of node at k is at k/2
      - Children of node at k are at 2k and 2k+1
*/

/*
  implementation  | insert | delmax | max
  unordered array |   1    |   N    |  N
  ordered array   |   N    |   1    |  1
  binary heap     |  logn  |  logn  |  1
*/

// Complete Implementation of Priority Queue using a binary heap
// change less to greater to switch to MinPQ

function MaxPQ(){
  // if implemented in java, a capacity is needed
  this.pq = [];
  this.len = this.pq.length;
}

MaxPQ.prototype.isEmpty = function(){
  return !this.len;
};

  //worst case - 1 + logN
MaxPQ.prototype.insert = function(key, cb){
  this.pq[++this.len] = key;
  swim(this.len, cb);

  function swim(key, less){
    while(key > 1 && less(k/2, k)){
      swap(k, k/2);
      k = k/2;
    }
  }
};

MaxPQ.prototype.delMax = function(cb){
  var max = this.pq[1];
  // swap max val with val at bottom of tree
  swap(1, this.len--);
  // adjust the current a[1] by sinking
  sink(1, cb);
  this.pq[this.len+1] = null; // prevent loitering
  return max;

  function sink(key, less){
    while(2*key <= N){
      var j = 2*key;
      // take the child that is larger if a[j] < a[j+1], take a[j+1] and swap that with a[k]
      if(j < N && less(j, j+1)) j++;
      if(!less(k, j)) break;
      swap(k, j);
      k = j;
    }
  }
};

/*
  Heap sort
  • Part1: Build heap ordered array using bottom up method
    start at this.len/2 cause the right half of arr does not have children
    for(var k = this.len/2; k >= 1; k--) sink(k, this.len);
  • Part2: Now remove maximum one at a time, except leave them in array instead of nulling out
    while(this.len > 1){
      swap(1, this.len--);
      sink(1);
    }
  
  Performance:
    • Part1 takes 2N compares/exchanges
    • Part2 takes 2NlogN compares/exchanges
    • Heapsort over all takes NlogN in worst-case that is in-place. 
      - Mergesort takes linear extra space
      - Quicksort takes quadratic time in worst case

    • Heapsort is optimal but:
      - Inner loop longer than quicksort
      - Makes poor use of cache memory
      - Not stable
*/
  



