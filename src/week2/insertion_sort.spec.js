const assert = require('assert');
const insertionSort = require('./insertion_sort').insertionSort;
const swap = require('./insertion_sort').swap;

describe('Insertion Sort', ()=>{
  var numArr, strArr;
  beforeEach(()=>{
    numArr = [7, 10, 5, 3, 8, 4, 2, 9, 6];
    strArr = ["Banana", "Orange", "Apple", "Mango"];
  });

  describe('insertion sort', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof insertionSort, 'function');
    });

    it('should sort the array in ascending order', ()=>{
      assert.deepEqual(insertionSort(numArr, (a, b) => a - b), [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should sort the array in descending order', ()=>{
      assert.deepEqual(insertionSort(numArr, (a, b) => b - a), [2, 3, 4, 5, 6, 7, 8, 9, 10].reverse());
    });

    it('should sort the strings in alphabetical order', ()=>{
      assert.deepEqual(insertionSort(strArr, (a, b) => a.localeCompare(b)), ['Apple', 'Banana', 'Mango', 'Orange']);
    });
  });
});