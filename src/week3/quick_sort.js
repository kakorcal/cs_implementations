/*
  Quick Sort:
  • Shuffle the array
  • Arbitrarily choose arr[j] as partition element
  • Partition so that for some j
    - entry a[j] is in place
    - no larger entry to the left of j
    - no smaller entry to the right of j
  • Sort each piece recursively

  Phase 1:
    • Scan i from left to right so long as (a[i] < a[lo])
    • Scan j from right to left so long as (a[j] > a[lo])
    • Exchange a[i] with a[j]
  Phase 2:
    • Exchange a[lo] with a[j] when j < i

  Details:
  Equal keys - When duplicates are present, it is better to stop on keys equal to the partitioning item's key
  Not Stable - doesn't persist the sorting
  Best Case: Nlog(N)
  Worst Case: N^2 (when array is already ordered)
  Average Case: 1.39log(N) (still faster than merge sort b/c it doesn't require extra memory)
*/

function quickSort(arr, lo, hi, cb){
  if(hi <= lo) return;
  var j = partition(arr, lo, hi, cb);
  quickSort(arr, lo, j-1, cb);
  quickSort(arr, j+1, hi, cb);
}

function partition(arr, lo, hi, less){
  var i = lo;
  var j = hi + 1;

  while(true){
    while(less(arr[++i], arr[lo])) if(i === hi) break;
    while(less(arr[lo], arr[--j])) if(j === lo) break;
    if(i >= j) break;
    swap(arr, i, j);
  }

  swap(arr, lo, j);
  return j;
}

function swap(arr, i1, i2){
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

/*
  Selection:
  Given an array of N items, find the kth largest.
  Ex. Min (k = 0), Max (k = N-1), Median (k = N/2)

  • Entry a[j] is in place
  • No larger entry to the left of j
  • No smaller entry to the right of j

  Repeat in one subarray, depending on j. finished when j equals k
*/

function selection(arr, k, cb){
  if(k < 0 || k >= arr.length) return null;
  var lo = 0; 
  var hi = arr.length - 1;

  while(hi > lo){
    var j = partition(arr, lo, hi, cb);
    if(j < k) {
      lo = j + 1; 
    }else if(j > k) {
      hi = j - 1; 
    }else {
      return arr[k]; 
    }
  }
  return arr[k];
}

/*
  Duplicate Keys
  Mistake - Put all items equal to the partitioning item on one side O(N^2)
  Recommended - Stop scans on items equal to the partitioning item O(NlogN)
  Desired - Put all items equal to the partitioning item in place

  Dijkstra 3-way partitioning 
  • Let v be partitioning item a[lo]
  • Scan i from left to right
    - (a[i] < v): exchange a[lt] with a[i]. increment both lt and i
    - (a[i] > v): exchange a[gt] with a[i]. decrement gt
    - (a[i] == v): increment i 

  Invariant
  a[lt] to a[i], where a[i] not included, is equal to v
  left of a[lt] is less than v
  right of a[gt], where a[gt] not included, is greater than v
*/

function threeWayQSort(arr, lo, hi){
  if(hi <= lo) return;
  var lt = lo;
  var gt = hi;
  var v = arr[lo];
  var i = lo;
  while(i <= gt){
    if(arr[i] < v) {
      swap(arr, lt++, i++);
    }else if(arr[i] > v) {
      swap(arr, i, gt--); 
    }else{
      i++;
    } 
  }
  threeWayQSort(arr, lo, lt-1);
  threeWayQSort(arr, gt+1, hi);
}

module.exports = {quickSort, partition, selection};