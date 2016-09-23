const assert = require('assert');
const shellSort = require('./shell_sort').shellSort;

describe('Shell Sort', ()=>{
  var numArr, strArr;
  beforeEach(()=>{
    numArr = [7, 10, 5, 3, 8, 4, 2, 9, 6];
    strArr = ["Banana", "Orange", "Apple", "Mango"];
  });

  describe('shell sort', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof shellSort, 'function');
    });

    it('should sort the array in ascending order', ()=>{
      assert.deepEqual(shellSort(numArr, (a, b) => a - b), [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should sort the array in descending order', ()=>{
      assert.deepEqual(shellSort(numArr, (a, b) => b - a), [2, 3, 4, 5, 6, 7, 8, 9, 10].reverse());
    });

    it('should sort the strings in alphabetical order', ()=>{
      assert.deepEqual(shellSort(strArr, (a, b) => a.localeCompare(b)), ['Apple', 'Banana', 'Mango', 'Orange']);
    });
  });
});