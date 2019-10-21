const { assert } = require("chai");
let DoubleLinkedList = require("../src/DoubleLinkedList");

describe('DoubleLinkedList', () => {
    describe('DoubleLinkedList', () => {
        it('should return an object', () => {
            const doubleLinkedList = new DoubleLinkedList();
    
            assert.isObject(doubleLinkedList);
        });
    });
    
    describe('DoubleList.clear()', () => {
        it('should return size ', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            doubleLinkedList.clear();
    
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(doubleLinkedList.getString(), expectedString);
        });
    
        it('should return size = []', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            doubleLinkedList.clear();
    
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(doubleLinkedList.getString(), expectedString);
        });
    
        it('should expected [1]', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [1];
            const expectedString = '[]';
            const expectedSize = 1;
    
            doubleLinkedList.clear();
            
            
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(doubleLinkedList.getString(), expectedString);
        });
    });
    
    describe('DoubleLinkedList.init()', () => {
        it('should return size = 0 (undefined)', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            doubleLinkedList.clear();
    
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(doubleLinkedList.getString(), expectedString);
        });
    
        it('should return size = []', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            doubleLinkedList.clear();
    
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(doubleLinkedList.getString(), expectedString);
        });
    
        it('should expected [1]', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [1];
            const expectedString = '[]';
            const expectedSize = 1;
            const actual = doubleLinkedList.getString();
    
            doubleLinkedList.init(value);
            
            
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
    
        it('should expected =[1, 2]', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [1, 2];
            const expectedSize = 2;
            const expectedString = '[]';
            const actual = doubleLinkedList.getString();
    
            doubleLinkedList.init(value);
    
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });

        it('should expected =[1, 2, 3, 4]', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [1, 2, 3, 4];
            const expectedSize = 4;
            const expectedString = '[]';
            const actual = doubleLinkedList.getString();
    
            doubleLinkedList.init(value);
    
            assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
    });
    
    describe('DoubleLinkedList (pop, push), (shift, unshift)', () => {
    
        describe('DoubleLinkedList.push()', () => {
    
            it('should returns new size of DoubleLinkedList', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const expectedSize = 0;
                const expectedString = '[]';
            
                doubleLinkedList.push();
            
                assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
                assert.deepEqual(doubleLinkedList.getString(), expectedString);
            });
    
            it('should returns null', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const value = null;
                const expectedSize = doubleLinkedList.getSize();
                const expectedString = doubleLinkedList.getString();
            
                doubleLinkedList.push(value);
            
                assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
                assert.deepEqual(doubleLinkedList.getString(), expectedString);
            });
            
            it('should expected Array size = 1', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const value = [1];
                const expectedString = '[1]';
                const expectedSize = value.length;
    
                doubleLinkedList.push(value);
            
                assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
                assert.deepEqual(doubleLinkedList.getString(), expectedString);
            });
            
            it('should expected Array size = 2', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const value = [1, 2];
                const expectedSize = value.length;
                const expectedString = '[1, 2]';
            
                doubleLinkedList.push(value);
            
                assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
                assert.deepEqual(doubleLinkedList.getString(), expectedString);
            });
        });
    
        describe('DoubleLinkedList.pop()', () => {
    
            it('delete last element of Array and return it', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const value = [21, 3, 17];
                const last = value.length - 1;
                const expected = last;
            
                const actual = doubleLinkedList.pop(value);
            
                assert.deepEqual(actual, expected);
            });
            
            
        });
    
        describe('DoubleLinkedList.unshift()', () => {
            it('should returns new size of DoubleLinkedList', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const value = 1;
                const expectedSize = doubleLinkedList.getSize();
            
                doubleList.unshift(value);
            
                assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
    
            });
    
            it('should returns null', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const value = null;
                const expectedSize = doubleLinkedList.getSize();
                const expectedString = doubleLinkedList.getString();
            
                doubleLinkedList.unshift(value);
            
                assert.deepEqual(doubleLinkedList.getSize(), expectedSize);
                assert.deepEqual(doubleLinkedList.getString(), expectedString);
            });
            
        });
    
        describe('DoubleLinkedList.shift()', () => {
            it('should returns the first element of DoubleLinkedList', () => {
                const doubleLinkedList = new DoubleLinkedList();
                const value = [1, 2, 3];
                const first = value[0];
                const expected = first;
    
                const actual = doubleLinkedList.shift(value);
    
                assert.deepEqual(actual, expected);
            });
        }); 
    
    });

    describe('DoubleLinkedList.slice()', () => {
        it('should returns copy 2 elements of DoubleLinkedList', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [1, 2, 3, 4, 5];
            const expectedSlice = [1, 2];

            const actual = doubleLinkedList.toSlice(value);

            assert.deepEqual(actual, expectedSlice);
        });
    });

    describe('DoubleLinkedList.splice()', () => {
        it('should returns deleted elements of DoubleLinkedList', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [1, 2, 3, 4, 5];

            const actual = doubleLinkedList.toSplice(value);

            assert.deepEqual(actual, expected);
        });

        it('should returns empty array', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [1, 2];
            const expectedSlice = [empty, empty];

            const actual = doubleLinkedList.toSplice(value);

            assert.deepEqual(actual, expectedSlice);
        });
    });
    
    describe('sort(function(first, seconod)', () => {
        it('should sorts the array in place', () => {
            const doubleLinkedList = new DoubleLinkedList();
            const value = [3, 1, 5, 2];
            const expected = [1, 2, 3, 5];
    
            const actual = doubleLinkedList.toSort(value);
    
            assert.deepEqual(actual, expected); 
        });
    });
});
