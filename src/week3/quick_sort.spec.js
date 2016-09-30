const assert = require('assert');
const quickSort = require('./quick_sort').quickSort;
const partition = require('./quick_sort').partition;
const selection = require('./quick_sort').selection;

describe('Quick Sort', ()=>{
  var numArr, letterArr;
  var numLess = (a, b) => a - b < 0;
  var letterLess = (a, b) => a.localeCompare(b) < 0;
  beforeEach(()=>{
    letterArr = ['b','c','x','a','y','z'];
    numArr = [7,10,5,3,8,4,2,9,6];
  });

  describe('partition', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof partition, 'function');
    });

    it('should return the index of the partition element', ()=>{
      assert.deepEqual(partition(letterArr, 0, letterArr.length, letterLess), 1);
    });
  });

  describe('quick sort', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof quickSort, 'function');
    }); 

    it('should sort a string array', ()=>{
      quickSort(letterArr, 0, letterArr.length - 1, letterLess);
      assert.deepEqual(letterArr, ['a','b','c','x','y','z']);
    });

    it('should sort a number array', ()=>{
      quickSort(numArr, 0, numArr.length - 1, numLess);
      assert.deepEqual(numArr, [2,3,4,5,6,7,8,9,10]);
    });
  });

  describe('selection', ()=>{
    it('should return the kth largest element', ()=>{
      assert.strictEqual(selection([7, 10, 4, 3, 20, 15], 3, numLess), 10);
      assert.strictEqual(selection([7, 10, 4, 3, 20, 15], 4, numLess), 15);
    });

    it('should return null if k is out of bounds', ()=>{
      assert.strictEqual(selection([7, 10, 4, 3, 20, 15], 10, numLess), null);
      assert.strictEqual(selection([7, 10, 4, 3, 20, 15], -1, numLess), null);
    });
  });
});
