/*
  Selection Sort:
    • In iteration i, find index min of smallest remaining entry
    • Swap a[i] and a[min]
    • Increment i 
    • Anything to left of i (including i) is fixed and in ascending order
    • No entry to right of i is smaller than entries to the left of i

    Worst case: O(n^2)
      Goes through same operation even if the array is sorted already
*/

function swap(arr, i1, i2){
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  return arr;
}

function selectionSort(arr, compare){  
  for(var i = 0; i < arr.length; i++){
    var min = i;
    for(var j = i + 1; j < arr.length; j++){
      // find min
      if(compare(arr[min], arr[j]) > 0){
        // if positive number, that means arr[min] is greater than arr[j]
        min = j;
      }
    }
    swap(arr, min, i);
  }

  return arr;
}

module.exports = {selectionSort, swap};