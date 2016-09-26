const assert = require('assert');
const abstractMerge = require('./merge_sort').abstractMerge;
const mergeSort = require('./merge_sort').mergeSort;

describe('Merge Sort', ()=>{
  var numArr, letterArr;
  var numLess = (a, b) => a - b < 0;
  var letterLess = (a, b) => a.localeCompare(b) < 0;
  beforeEach(()=>{
    letterArr = ['b','c','x','a','y','z'];
    numArr = [7,10,5,3,8,4,2,9,6];
  });

  describe('abstract merge', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof abstractMerge, 'function');
    });

    it('should return a sorted array', ()=>{
      var hi = letterArr.length - 1;
      var mid = Math.floor(hi / 2);
      assert.deepEqual(abstractMerge(letterArr, 0, mid, hi, letterLess), ['a','b','c','x','y','z']);
    });
  });

  describe('merge sort', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof mergeSort, 'function');
    }); 

    it('should sort a string array', ()=>{
      mergeSort(letterArr, 0, letterArr.length - 1, letterLess);
      assert.deepEqual(letterArr, ['a','b','c','x','y','z']);
    });

    it('should sort a number array', ()=>{
      mergeSort(numArr, 0, numArr.length - 1, numLess);
      assert.deepEqual(numArr, [2,3,4,5,6,7,8,9,10]);
    });
  });
});