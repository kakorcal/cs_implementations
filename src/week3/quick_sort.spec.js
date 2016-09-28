const assert = require('assert');
const quickSort = require('./quick_sort').quickSort;
const partition = require('./quick_sort').partition;

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
});
