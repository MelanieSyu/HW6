const IList = require('./IList');

const ArrayList = function() {
    IList.apply(this, arguments);
    this._size = 0;
    this._array = [];
  };

  ArrayList.prototype = Object.create(IList.prototype);
  ArrayList.prototype.constructor = ArrayList;

  ArrayList.prototype.init = function(value) {
    this.clear();

    if(Array.isArray(value)) {
        for(let i = 0; i < value.length; i++) {
            this._array[i] = value[i];
            this._size++;
        }
    }

};



ArrayList.prototype.clear = function() {
    this._size = 0;
    this._array = [];
};

ArrayList.prototype.getSize = function() {
    return this._size;
};

ArrayList.prototype.getString = function() {
    let result = '';

    result += '[';
    for(let i = 0; i < this._array.length; i++) {
        result += this._array[i];
        if(i < this._array.length - 1) {
            result += ', ';
        }
    }
    result += ']';

    return result;
};

ArrayList.prototype.push = function(value) {
  if(Array.isArray(value)) {
    for(let i = 0; i < value.length; i++) {
        this._array[i] = value[i];
        this._size++;
    }
 }
};

ArrayList.prototype.pop = function(value) {
  if(Array.isArray(value)){
      let last = value.length -1;
      value.length = last;
  }
  return value.length;
};

ArrayList.prototype.unshift = function(value){
    const arr = [value];
    if(ArrayList.isArray) {
        for(let i = 0; i < this._array.length; i++) {
            arr[i+1] = this._array[i];
            this._size++;
            return arr.length;
        }
    }
};

ArrayList.prototype.shift = function(value) {
  if(Array.isArray(value)){
      let first = value[0];
      let tempArr = [];
      for(let i = 1; i < value.length; i++){
          tempArr[i - 1] = value[i];
      }
      return first;  
  }
};

ArrayList.prototype.toSlice = function (value) {
    this._array = value;
    tempArray = [];
    for(let i = 0; i < this._array.length - 2; i++){
        tempArray[i] =  this._array[i];
    }
    return tempArray;
};

ArrayList.prototype.toSplice = function (value) {
    this._array = value;
    let tempAr = [];
    let element = (this._array[0], this._array[1]);
    for(let i = 2; i < this._array.length; i++){
        tempAr[i-2] = this._array[i];
        if(this._array.length > 2){
            return element;
        } else {
            return tempAr;
        }
    }  
};

ArrayList.prototype.toSort = function(value) {
    this._array = value;
    let temp = [];
    
    for(let first = 0; first < value.length; first++){
        for(let second = 0; second < first; second++){
            if(this._array[second] > this._array[first]){
                temp = this._array[first];
                this._array[first] = this._array[second];
                this._array[second] = temp;
            }
        }
    }
    
    return this._array;
};


module.exports = ArrayList;