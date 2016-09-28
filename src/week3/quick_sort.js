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
  Average Case: 1.39log(N) (still faster than merge sort b/c it doesn't require extra memory
  )
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

module.exports = {quickSort, partition};