/*
  Shell Sort: 
    • Fast unless array size is huge.
    • h-sorting - Insertion sort, with stride length h
    • the code is same as insertion sort except when you are comparing the elements
      you compare arr[j] > arr[j-h] instead of arr[j] > arr[j+1]
    • why insertion sort? 
      - big increments - small subarray
      - small increments - nearby in order (meaning insertion sort is fast ~ O(N))
      - A g-sorted array remains g-sorted after h-sorting it
    • which increment sequence to use? 
      - knuth (ok) - 3x+1
      - sedgewick (good) - (9*4^i) - (9*2^i) + 1 merge 4^i - (3*2^i) + 1

    Worst Case: O(N^3/2)
    Actually, an accurate model has not yet been discovered
*/

function swap(arr, i1, i2){
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function shellSort(arr, cb){
  var h = 1;
  while(h < arr.length / 3) h = (3*h)+1;
  // 1, 4, 13, 40, 121, 364, ... 3x+1

  while(h >= 1){
    for(var i = 0; i < arr.length; i++){
      for(var j = i; j >= h && cb(arr[j], arr[j-h]) < 0; j-=h){
        swap(arr, j, j-h);
      }
    }
    h = Math.floor(h/3);
  }

  return arr;
}

module.exports = {shellSort, swap};