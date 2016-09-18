const assert = require('assert');
const RASOS = require('./resizing_arrays').ResizingArrayStackOfStrings;

describe('Resizing Arrays', ()=>{
  var Stack;
  beforeEach(()=>{ Stack = new RASOS(); });


  describe('Constructor', ()=>{
    it('should exist', ()=>{
      assert.strictEqual(typeof RASOS, 'function');
    }); 

    it('should create a new object with an empty array and count of 0', ()=>{
      assert.ok(Array.isArray(Stack.list));
      assert.strictEqual(Stack.count, 0);
    });
  });

  describe('push', ()=>{
    it('should add a new item to the array', ()=>{
      Stack.push('foo');
      assert.strictEqual(Stack.list[Stack.count - 1], 'foo');
    });

    it('should increment the count', ()=>{
      Stack.push('foo').push('bar').push('baz');
      assert.strictEqual(Stack.count, 3);
    });

    it('should return the stack itself', ()=>{
      assert.deepEqual(Stack.push('foo').push('bar').push('baz').list, ['foo', 'bar', 'baz', null]);
      assert.deepEqual(Stack.count, 3);
    });

    it('should double the capacity every time the stack fills up', ()=>{
      Stack.push(1).push(2);
      assert.strictEqual(Stack.list.length, 4);
    });
  });

  describe('isEmpty', ()=>{
    it('should return true when count is 0', ()=>{
      assert.ok(Stack.isEmpty());
    });

    it('should return false when count is not 0', ()=>{
      Stack.push(1);
      assert.ok(!Stack.isEmpty());
    });
  });

  describe('pop', ()=>{
    it('should return the value of the popped element', ()=>{
      Stack.push(1).push(2).push(3).push(4).push(5);
      assert.strictEqual(Stack.pop(), 5);
      assert.strictEqual(Stack.pop(), 4);
      assert.strictEqual(Stack.pop(), 3);
    });

    it('should decrement the count after being popped', ()=>{
      Stack.push(1).push(2).push(3).push(4).push(5);
      Stack.pop();
      Stack.pop();
      Stack.pop();
      assert.strictEqual(Stack.count, 2);
    });

    it("should return 'Empty Stack' if pop is called on empty list", ()=>{
      assert.strictEqual(Stack.pop(), 'Empty Stack');
    });

    it('should shrink the capacity in halve every time the stack is one quarter full', ()=>{
      Stack.push(1).push(2).push(3).push(4);
      assert.strictEqual(Stack.list.length, 8);
      Stack.pop();
      Stack.pop();
      assert.strictEqual(Stack.list.length, 4);
    });
  });

});