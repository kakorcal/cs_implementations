/*
  Merge Sort:
  • Divide array into two halves
  • Recursively sort each half
  • Merge two halves

  Worst Case: Nlog(N)
  Space: N
*/

/*
  Abstract in-place merge
  Given two sorted subarrays a[lo] to a[mid] and a[mid+1] to a[hi],
  replace with sorted subarray a[lo] to a[hi]

  • copy a[] to an auxiliary array aux[]
  • copy back to a[] in sorted order
  • use three indices i j and k
  • k loops through a[]
  • i loops through aux[lo] to aux[mid] and j loops through aux[mid+1] to aux[hi]
  • compare aux[i] and aux[j]
  • if aux[i] > aux[j], add aux[j] to a[] and vice versa
  • if aux[i] === aux[j], always add aux[i] to a[] (convention)
*/

// TODO: Handle wrong inputs
// TODO: Handle unsorted arrays
// TODO: Optimize (see coursera merge sort vid) 

/*
  Practical Improvements:
  • Use insertion sort for arr.length < 7
  • Stop the sort if it is already sorted
   - is biggest item in first half <= smallest item in second half?
   - if(!less(a[mid+1], a[mid])) return;
*/

function mergeSortAbstract(arr, lo, hi, cb){
  if(hi <= lo) return;
  var mid = Math.floor(lo + (hi - lo) / 2);
  mergeSortAbstract(arr, lo, mid, cb);
  mergeSortAbstract(arr, mid+1, hi, cb);
  merge(arr, lo, mid, hi, cb);
}

/*
  Bottom-up mergesort
  • Pass through array, merging subarrays of size 1
  • Repeat for subarrays of size 2, 4, 8 ...
  • No recursion needed
*/

function mergeSortBottomUp(arr, cb){
  var N = arr.length;
  
  for(var sz = 1; sz < N; sz = sz + sz){
    for(var lo = 0; lo < N - sz; lo += sz + sz){
      merge(arr, lo, lo+sz-1, Math.min(lo+sz+sz-1, N-1), cb);
    }
  } 
}

function merge(arr, lo, mid, hi, less){
  // precondition: a[lo...mid] and a[mid+1...hi] is already sorted
  var i = lo;
  var j = mid + 1;
  var aux = arr.map(el => el);
  // for(var k = lo; k <= hi; k++) aux[k] = arr[k];

  for(var k = lo; k <= hi; k++){
    if(i > mid){
      arr[k] = aux[j++];
    }else if(j > hi){
      arr[k] = aux[i++];
    }else if(less(aux[j], aux[i])){
      // aux[j] < aux[i]
      arr[k] = aux[j++];
    }else{
      arr[k] = aux[i++];
    }
  }
  return arr;
}

module.exports = {merge, mergeSortAbstract, mergeSortBottomUp};