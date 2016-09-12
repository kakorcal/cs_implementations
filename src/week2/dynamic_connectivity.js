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