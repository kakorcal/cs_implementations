import {expect} from 'chai'
import {QuickFindUF, QuickUnionUF, WeightedQuickUnion} from './dynamic_connectivity'

describe('dynamic connectivity', ()=>{
  describe('quick find', ()=>{
    let list;
    beforeEach(()=>{
      list = new QuickFindUF(10);
    });
    
    describe('constructor', ()=>{
      it('should have id length of 10', ()=>{
        expect(list.id.length).to.equal(10);
      });
    });

    describe('union', ()=>{
      beforeEach(()=>{
        list.union(4,3);
        list.union(3,8);
        list.union(6,5);
        list.union(9,4);
        list.union(2,1);
        list.union(5,0);
        list.union(7,2);
      });

      it('should have three components', ()=>{
        expect(list.id.filter(id=>id===0).length).to.equal(3);
        expect(list.id.filter(id=>id===1).length).to.equal(3);
        expect(list.id.filter(id=>id===8).length).to.equal(4);
      });
    });

    describe('find', ()=>{
      beforeEach(()=>{
        list.union(4,3);
        list.union(3,8);
        list.union(6,5);
        list.union(9,4);
        list.union(2,1);
      });

      it('should return true', ()=>{
        expect(list.find(8,9)).to.equal(true);
      });

      it('should return false', ()=>{
        expect(list.find(5,0)).to.equal(false);
      });
    });
    
  });

  describe('quick union', ()=>{
    let list;
    beforeEach(()=>{
      list = new QuickUnionUF(10);
    });
    
    describe('constructor', ()=>{
      it('should have id length of 10', ()=>{
        expect(list.id.length).to.equal(10);
      });
    });

    describe('union', ()=>{
      beforeEach(()=>{
        list.union(4,3);
        list.union(3,8);
        list.union(6,5);
        list.union(9,4);
        list.union(2,1);
        list.union(5,0);
        list.union(7,2);
      });

      it('should have correct roots', ()=>{
        expect(list._root(0)).to.equal(0);
        expect(list._root(1)).to.equal(1);
        expect(list._root(2)).to.equal(1);
        expect(list._root(3)).to.equal(8);
        expect(list._root(4)).to.equal(8);
        expect(list._root(5)).to.equal(0);
        expect(list._root(6)).to.equal(0);
        expect(list._root(7)).to.equal(1);
        expect(list._root(8)).to.equal(8);
        expect(list._root(9)).to.equal(8);
      });

      it('should have leave nodes point to correct node', ()=>{
        expect(list.id[4]).to.equal(3);
        expect(list.id[6]).to.equal(5);
      });
    });
  });

  describe('weighted quick union', ()=>{
    let list;
    beforeEach(()=>{
      list = new WeightedQuickUnion(10);
    });
    
    describe('constructor', ()=>{
      it('should have id length of 10', ()=>{
        expect(list.id.length).to.equal(10);
      });
    });

    describe('union', ()=>{
      beforeEach(()=>{
        list.union(4,3);
        list.union(3,8);
        list.union(6,5);
        list.union(9,4);
        list.union(2,1);
        list.union(5,0);
        list.union(7,2);
      });

      it('should have correct roots', ()=>{
        expect(list._root(0)).to.equal(6);
        expect(list._root(1)).to.equal(2);
        expect(list._root(2)).to.equal(2);
        expect(list._root(3)).to.equal(4);
        expect(list._root(4)).to.equal(4);
        expect(list._root(5)).to.equal(6);
        expect(list._root(6)).to.equal(6);
        expect(list._root(7)).to.equal(2);
        expect(list._root(8)).to.equal(4);
        expect(list._root(9)).to.equal(4);
      });

      it('should have correct sizes', ()=>{
        expect(list.sz[list._root(2)]).to.equal(3);
        expect(list.sz[list._root(4)]).to.equal(4);
        expect(list.sz[list._root(6)]).to.equal(3);
      });
    });
  });
});