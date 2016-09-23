/*
  Insertion Sort:
    • In iteration i, swap a[i] with each larger entry to its left
    • Every time i iteration starts, j starts at the same index if i
    • On every j iteration, every element to the left of i is compared with a[j]
    • if a[j] < a[j+1], they are swapped. a[j+1] is to the left of a[j].
    • if a[j] > a[j+1], the j iteration stops
    
    On Average: O(N^2/4) for random ordered array
    Best Case: O(N-1) if everything was already sorted
    Worst Case: O(N^2/2) if array was already in descending order

    So it is good to use if the array is partially-sorted from the start
*/

function swap(arr, i1, i2){
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  return arr;
}

function insertionSort(arr, cb){
  for(var i = 0; i < arr.length; i++){
    for(var j = i; j > 0; j--){
      var compare = cb(arr[j], arr[j-1]);
      if(compare < 0) swap(arr, j, j-1);
      else break;
    }
  }
  return arr;
}

module.exports = {insertionSort, swap};