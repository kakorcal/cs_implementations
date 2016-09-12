/*
  dynamic connectivity:
    given a set of N objects
      union - connect two objects 
      connected - is there a path connecting the two objects
        • reflexive - point p is connected to p
        • symmetric - if p is connected to q, then q is connected to p
        • transitive - if p is connected to q and q is connected to r, then p is connected to r

    union(8,3)
    union(3,4)
    union(4,9)
    connected(8,9) true
*/

/*
  class UF:
            UF(int N) - initialize union-find data structure with N objects (0 to N-1)
    void    union(int p, int q) - add connection between p and q
    boolean connected(int p, int q) - are p and q in the same component?
*/

/*
  QuickFindUF (eager approach)
  Data Structure:
    • integer array id[] of size n
    • p and q are connected if and only if they have the same id

    find - check if p and q have the same id
    union - to merge components containing p and q, change all entries whose id equals id[p] to id[q]
  Big O Worst Case:
    init - N
    find - 1
    union - N (too slow)
*/

function QuickFindUF(size=0){
  this.id = new Array(size);
  for(let i = 0; i < size; i++) this.id[i] = i;
}

QuickFindUF.prototype.find = function(p, q){
   return this.id[p] === this.id[q];
};

QuickFindUF.prototype.union = function(p, q){
  let pid = this.id[p];
  let qid = this.id[q];
  for(let i = 0; i < this.id.length; i++){
    if(this.id[i] === pid) this.id[i] = qid;
  }
};

/*
  QuickUnionUF (lazy approach)
  Data Structure:
    • integer array id of size n
    • id[i] is parent of i
    • Root of i is id[id[...id[i]...]]

    find - check if p and q have the same root
    union - to merge p and q components, set the id of p's root to the id of q's root
  Big O Worst Case:
    init - N
    union - N (tree can get too tall)
    find - N (tree can get too tall)
*/

function QuickUnionUF(size=0){
  this.id = new Array(size);
  for(let i = 0; i < size; i++) this.id[i] = i;
}

QuickUnionUF.prototype._root = function(i){
  // chase parent pointers until reach root
  while(i !== this.id[i]) i = this.id[i]; 
  return i;
};

QuickUnionUF.prototype.find = function(p, q){
  return this._root(p) === this._root(q);
};

QuickUnionUF.prototype.union = function(p, q){
  // set the id of p's root to the id of q's root
  let rp = this._root(p);
  let rq = this._root(q);
  this.id[rp] = rq;
};

/*
  WeightQuickUnion (avoid tall trees)
  • modify quick-union to avoid tall trees
  • keep track of size of each tree (number of objects)
  • balance by linking root of smaller tree to root of larger tree
  Data Structure: 
    • Same as QuickUnionUF, but maintain extra array sz[i] to count number of objects in the tree rooted at i
  Big O Worst Case:
    • init - N
    • union - log2(n)
    • find - log2(n)
*/

function WeightedQuickUnion(size=0){
  this.id = new Array(size);
  this.sz = new Array(size);
  for(let i = 0; i < size; i++) {
    this.id[i] = i;
    this.sz[i] = 1;
  }
}

WeightedQuickUnion.prototype._root = function(i){
  // chase parent pointers until reach root
  while(i !== this.id[i]) i = this.id[i]; 
  return i;
};

WeightedQuickUnion.prototype.find = function(p, q){
  return this._root(p) === this._root(q);
};

WeightedQuickUnion.prototype.union = function(p, q){
  // set the id of p's root to the id of q's root
  // link root of smaller tree to root of larger tree
  let rp = this._root(p);
  let rq = this._root(q);
  if(rp === rq) return;
  if(this.sz[rp] < this.sz[rq]){
    this.id[rp] = rq;
    this.sz[rq] += this.sz[rp];
  }else{
    this.id[rq] = rp;
    this.sz[rp] += this.sz[rq];
  }
};

export {
  QuickFindUF,
  QuickUnionUF,
  WeightedQuickUnion
};