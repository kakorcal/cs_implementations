const assert = require('assert');
const selectionSort = require('./selection_sort').selectionSort;
const swap = require('./selection_sort').swap;

describe('Selection Sort', ()=>{
  var numArr, strArr;
  beforeEach(()=>{
    numArr = [7, 10, 5, 3, 8, 4, 2, 9, 6];
    strArr = ["Banana", "Orange", "Apple", "Mango"];
  });

  describe('swap', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof swap, 'function');
    });

    it('should swap one elements position to another based on the indices', ()=>{
      assert.deepEqual(swap(numArr, 2, 4), [7, 10, 8, 3, 5, 4, 2, 9, 6]);
    });
  });

  describe('selection sort', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof selectionSort, 'function');
    });

    it('should sort the array in ascending order', ()=>{
      assert.deepEqual(selectionSort(numArr, (a, b) => a - b), [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should sort the array in descending order', ()=>{
      assert.deepEqual(selectionSort(numArr, (a, b) => b - a), [2, 3, 4, 5, 6, 7, 8, 9, 10].reverse());
    });

    it('should sort the strings in alphabetical order', ()=>{
      assert.deepEqual(selectionSort(strArr, (a, b) => a.localeCompare(b)), ['Apple', 'Banana', 'Mango', 'Orange']);
    }); 
  });
});