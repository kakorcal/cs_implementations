const assert = require('assert');
const LinkedQueueOfStrings = require('./queues').LinkedQueueOfStrings;
const Node = require('./queues').Node;

describe('LinkedQueueOfStrings', ()=>{
  describe('Constructors', ()=>{
    it('LinkedQueueOfStrings should exist', ()=>{
      assert.strictEqual(typeof LinkedQueueOfStrings, 'function');
    });

    it('Node should exist', ()=>{
      assert.strictEqual(typeof Node, 'function');
    });

    it('Should create a head and tail', ()=>{
      assert.strictEqual(new LinkedQueueOfStrings().head, null);
      assert.strictEqual(new LinkedQueueOfStrings().tail, null);
    });

    it('Should create a node', ()=>{
      assert.strictEqual(new Node(3).value, 3);
    });
  });
  
  describe('isEmpty', ()=>{
    it('should exist', ()=>{
      assert.strictEqual(typeof LinkedQueueOfStrings.prototype.isEmpty, 'function');
    });

    it('should return true if the queue is empty', ()=>{
      var Queue = new LinkedQueueOfStrings();
      assert.strictEqual(Queue.isEmpty(), true);
    });

    it('should return false if queue is not empty', ()=>{
      var Queue = new LinkedQueueOfStrings(0);
      assert.strictEqual(Queue.isEmpty(), false);
    });
  });

  describe('enqueue', ()=>{
    var Queue;
    beforeEach(()=>{ Queue = new LinkedQueueOfStrings(); });

    it('should exist', ()=>{
      assert.strictEqual(typeof LinkedQueueOfStrings.prototype.enqueue, 'function');
    });

    it('should add node when queue is empty', ()=>{
      assert.deepEqual(Queue.enqueue(1), {
        head: {value: 1, next: null},
        tail: {value: 1, next: null}
      });
    });

    it('should add nodes to the end of the queue', ()=>{
      assert.deepEqual(Queue.enqueue(1).enqueue(2).enqueue('foo'), {
        head: {
          value: 1, 
          next: {
            value: 2,
            next: {
              value: 'foo',
              next: null
            }
          }
        },
        tail: {value: 'foo', next: null}
      });
    });
  });

  describe('dequeue', ()=>{
    var Queue;
    beforeEach(()=>{ Queue = new LinkedQueueOfStrings(); });

    it('should exist', ()=>{
      assert.strictEqual(typeof LinkedQueueOfStrings.prototype.dequeue, 'function');
    });

    it("Should return 'Empty Queue' if queue is empty", ()=>{
      assert.strictEqual(Queue.dequeue(), 'Empty Queue');
    });

    it('Should return the value of the dequeued node - one node', ()=>{
      assert.strictEqual(Queue.enqueue(1).dequeue(), 1);
      assert.deepEqual(Queue, {head: null, tail: null});
    });

    it('Should return the value of the dequeued node - multiple nodes', ()=>{
      assert.strictEqual(Queue.enqueue(1).enqueue(2).enqueue(3).dequeue(), 1);
      assert.deepEqual(Queue, {
        head: {
          value: 2,
          next: {
            value: 3,
            next: null
          }
        },
        tail: {
          value: 3,
          next: null
        }
      })
    });
  });
});