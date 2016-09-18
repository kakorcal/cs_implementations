const fs = require('fs');
const path = require('path');
const assert = require('assert');
const StackOfStrings = require('./stacks').StackOfStrings;
const Node = require('./stacks').Node;
const txtFilePath = path.resolve('src/week2/tobe.txt');

describe('StackOfStrings', ()=>{
  describe('Constructors', ()=>{
    it('StackOfStrings should exist', ()=>{
      assert.strictEqual(typeof StackOfStrings, 'function');
    });

    it('Node should exist', ()=>{
      assert.strictEqual(typeof Node, 'function');
    });

    it('Should create a head', ()=>{
      assert.strictEqual(new StackOfStrings().head, null);
    });

    it('Should create a node', ()=>{
      assert.strictEqual(new Node(3).value, 3);
    });
  });
  
  describe('Text File', ()=>{
    it('should read the correct file', (done)=>{
      fs.readFile(txtFilePath, 'utf-8', (err, string)=>{
        if(err) throw err;
        assert.strictEqual(string, 'to be or not to - be - - that - - - is');
        done();
      });
    });
  });

  describe('isEmpty', ()=>{
    it('should exist', ()=>{
      assert.strictEqual(typeof StackOfStrings.prototype.isEmpty, 'function');
    });

    it('should return true if the stack is empty', ()=>{
      var Stack = new StackOfStrings();
      assert.strictEqual(Stack.isEmpty(), true);
    });

    it('should return false if stack is not empty', ()=>{
      var Stack = new StackOfStrings(0);
      assert.strictEqual(Stack.isEmpty(), false);
    });
  });

  describe('push', ()=>{
    var Stack;
    beforeEach(()=>{ Stack = new StackOfStrings(); });

    it('should exist', ()=>{
      assert.strictEqual(typeof StackOfStrings.prototype.push, 'function');
    });

    it('should add node when stack is empty', ()=>{
      assert.deepEqual(Stack.push(1), {head: {value: 1, next: null}});
    });

    it('should add to the front of the stack', ()=>{
      assert.deepEqual(Stack.push(1).push(2).push(3), {
        head: {
          value: 3, 
          next: {
            value: 2,
            next: {
              value: 1,
              next: null
            }
          }
        }
      })
    });
  });

  describe('pop', ()=>{
    var Stack;
    beforeEach(()=>{ Stack = new StackOfStrings(); });

    it('should exist', ()=>{
      assert.strictEqual(typeof StackOfStrings.prototype.pop, 'function');
    });

    it("Should return 'Empty Stack' if stack is empty", ()=>{
      assert.strictEqual(Stack.pop(), 'Empty Stack');
    });

    it('Should return the value of the popped node - one node', ()=>{
      assert.strictEqual(Stack.push(1).pop(), 1);
      assert.deepEqual(Stack, {head: null});
    });

    it('Should return the value of the popped node - multiple nodes', ()=>{
      assert.strictEqual(Stack.push(1).push(2).push(3).pop(), 3);
      assert.deepEqual(Stack, {
        head: {
          value: 2,
          next: {
            value: 1,
            next: null
          }
        }
      })
    });
  });

  describe('Create stack with text file inputs', ()=>{
    var Stack = new StackOfStrings();

    it('should create a stack without dashes', (done)=>{
      fs.readFile(txtFilePath, 'utf-8', (err, string)=>{
        if(err) throw err;

        for(var i = 0; i < string.length; i++){
          if(string[i] === '-'){
            Stack.pop();
          }else{
            Stack.push(string[i]);
          }
        } 

        assert.strictEqual(Stack.head.value, 's');
        assert.strictEqual(Stack.head.next.next.next.next.value, 'a');
        done();
      });
    });
  });
});