const { assert } = require("chai");
let ArrayList = require("../src/ArrayList");

describe('ArrayList', () => {
    describe('ArrayList', () => {
        it('should return an object', () => {
            const list = new ArrayList();
    
            assert.isObject(list);
        });
    });
    
    describe('ArrayList.clear()', () => {
        it('should return size = 0 (undefined)', () => {
            const list = new ArrayList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            list.clear();
    
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(list.getString(), expectedString);
        });
    
        it('should return size = []', () => {
            const list = new ArrayList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            list.clear();
    
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(list.getString(), expectedString);
        });
    
        it('should expected [1]', () => {
            const list = new ArrayList();
            const value = [1];
            const expectedString = '[]';
            const expectedSize = 1;
            const actual = list.getString();
    
            list.init(value);
            
            
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
    
        it('should expected = 2', () => {
            const list = new ArrayList();
            const value = [1, 2];
            const expectedSize = 2;
            const expectedString = '[]';
            const actual = list.getString();
    
            list.init(value);
    
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
    });
    
    describe('ArrayList.init()', () => {
        it('should return size = 0 (undefined)', () => {
            const list = new ArrayList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            list.clear();
    
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(list.getString(), expectedString);
        });
    
        it('should return size = []', () => {
            const list = new ArrayList();
            const expectedSize = 0;
            const expectedString = '[]';
    
            list.clear();
    
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(list.getString(), expectedString);
        });
    
        it('should expected [1]', () => {
            const list = new ArrayList();
            const value = [1];
            const expectedString = '[]';
            const expectedSize = 1;
            const actual = list.getString();
    
            list.init(value);
            
            
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
    
        it('should expected =[1, 2]', () => {
            const list = new ArrayList();
            const value = [1, 2];
            const expectedSize = 2;
            const expectedString = '[]';
            const actual = list.getString();
    
            list.init(value);
    
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });

        it('should expected =[1, 2, 3, 4]', () => {
            const list = new ArrayList();
            const value = [1, 2, 3, 4];
            const expectedSize = 4;
            const expectedString = '[]';
            const actual = list.getString();
    
            list.init(value);
    
            assert.deepEqual(list.getSize(), expectedSize);
            assert.deepEqual(actual, expectedString);
        });
    });
    
    describe('ArrayList (pop, push), (shift, unshift)', () => {
    
        describe('ArrayList.push()', () => {
    
            it('should returns new size of ArrayList', () => {
                const list = new ArrayList();
                const expectedSize = 0;
                const expectedString = '[]';
            
                list.push();
            
                assert.deepEqual(list.getSize(), expectedSize);
                assert.deepEqual(list.getString(), expectedString);
            });
    
            it('should returns null', () => {
                const list = new ArrayList();
                const value = null;
                const expectedSize = list.getSize();
                const expectedString = list.getString();
            
                list.push(value);
            
                assert.deepEqual(list.getSize(), expectedSize);
                assert.deepEqual(list.getString(), expectedString);
            });
            
            it('should expected Array size = 1', () => {
                const list = new ArrayList();
                const value = [1];
                const expectedString = '[1]';
                const expectedSize = value.length;
    
                list.push(value);
            
                assert.deepEqual(list.getSize(), expectedSize);
                assert.deepEqual(list.getString(), expectedString);
            });
            
            it('should expected Array size = 2', () => {
                const list = new ArrayList();
                const value = [1, 2];
                const expectedSize = value.length;
                const expectedString = '[1, 2]';
            
                list.push(value);
            
                assert.deepEqual(list.getSize(), expectedSize);
                assert.deepEqual(list.getString(), expectedString);
            });
        });
    
        describe('ArrayList.pop()', () => {
    
            it('delete last element of Array and return it', () => {
                const list = new ArrayList();
                const value = [21, 3, 17];
                const last = value.length - 1;
                const expected = last;
            
                const actual = list.pop(value);
            
                assert.deepEqual(actual, expected);
            });   
        });
    
        describe('ArrayList.unshift()', () => {
            it('should returns new size of ArrayList', () => {
                const list = new ArrayList();
                const value = 1;
                const expectedSize = list.getSize();
            
                list.unshift(value);
            
                assert.deepEqual(list.getSize(), expectedSize);
    
            });
    
            it('should returns null', () => {
                const list = new ArrayList();
                const value = null;
                const expectedSize = list.getSize();
                const expectedString = list.getString();
            
                list.unshift(value);
            
                assert.deepEqual(list.getSize(), expectedSize);
                assert.deepEqual(list.getString(), expectedString);
            });
            
        });
    
        describe('ArrayList.shift()', () => {
            it('should returns the first element of ArrayList', () => {
                const list = new ArrayList();
                const value = [1, 2, 3];
                const first = value[0];
                const expected = first;
    
                const actual = list.shift(value);
    
                assert.deepEqual(actual, expected);
            });
        }); 
    

    
    });

    describe('ArrayList.slice()', () => {
        it('should returns copy 2 elements of ArrayList', () => {
            const list = new ArrayList();
            const value = [1, 2, 3, 4, 5];
            const expectedSlice = [1, 2];

            const actual = list.toSlice(value);

            assert.deepEqual(actual, expectedSlice);
        });
    });

    describe('ArrayList.splice()', () => {
        it('should returns deleted elements of ArrayList', () => {
            const list = new ArrayList();
            const value = [1, 2, 3, 4, 5];

            const actual = list.toSplice(value);

            assert.deepEqual(actual, expected);
        });

        it('should returns empty array', () => {
            const list = new ArrayList();
            const value = [1, 2];
            const expectedSlice = [empty, empty];

            const actual = list.toSplice(value);

            assert.deepEqual(actual, expectedSlice);
        });
    });
    
    describe('sort(function(first, seconod)', () => {
        it('should sorts the array in place', () => {
            const list = new ArrayList();
            const value = [3, 1, 5, 2];
            const expected = [1, 2, 3, 5];
    
            const actual = list.toSort(value);
    
            assert.deepEqual(actual, expected); 
        });
    });
});

