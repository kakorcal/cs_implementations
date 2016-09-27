const assert = require('assert');
const merge = require('./merge_sort').merge;
const mergeSortAbstract = require('./merge_sort').mergeSortAbstract;
const mergeSortBottomUp = require('./merge_sort').mergeSortBottomUp;

describe('Merge Sort', ()=>{
  var numArr, letterArr;
  var numLess = (a, b) => a - b < 0;
  var letterLess = (a, b) => a.localeCompare(b) < 0;
  beforeEach(()=>{
    letterArr = ['b','c','x','a','y','z'];
    numArr = [7,10,5,3,8,4,2,9,6];
  });

  describe('merge', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof merge, 'function');
    });

    it('should return a sorted array', ()=>{
      var hi = letterArr.length - 1;
      var mid = Math.floor(hi / 2);
      assert.deepEqual(merge(letterArr, 0, mid, hi, letterLess), ['a','b','c','x','y','z']);
    });
  });

  describe('merge sort abstract', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof mergeSortAbstract, 'function');
    }); 

    it('should sort a string array', ()=>{
      mergeSortAbstract(letterArr, 0, letterArr.length - 1, letterLess);
      assert.deepEqual(letterArr, ['a','b','c','x','y','z']);
    });

    it('should sort a number array', ()=>{
      mergeSortAbstract(numArr, 0, numArr.length - 1, numLess);
      assert.deepEqual(numArr, [2,3,4,5,6,7,8,9,10]);
    });
  });

  describe('merge sort bottom up', ()=>{
    it('should be a function', ()=>{
      assert.strictEqual(typeof mergeSortBottomUp, 'function');
    }); 

    it('should sort a string array', ()=>{
      mergeSortBottomUp(letterArr, letterLess);
      assert.deepEqual(letterArr, ['a','b','c','x','y','z']);
    });

    it('should sort a number array', ()=>{
      mergeSortBottomUp(numArr, numLess);
      assert.deepEqual(numArr, [2,3,4,5,6,7,8,9,10]);
    });
  });
});