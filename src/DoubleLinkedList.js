const IList = require('./IList');

const Node = function(value) {
    this.data = value;
    this.next = null;
    this.previous = null;  //uzel sozdaniye
};

const DoubleLinkedList =  function() {
    IList.apply(this, arguments); // putevoditel kot napravlayt
    this._root = null; // nacalo
    this._tail = null; //konec
    this._size = 0; 
};

DoubleLinkedList.prototype = Object.create(IList.prototype);
DoubleLinkedList.prototype.constructor = DoubleLinkedList;

DoubleLinkedList.prototype.clear = function() {
    this._size = 0;
    this._tail = null;
    this._root = null;
};

DoubleLinkedList.prototype.init = function(value) {
      for (let i = 0; i < value.lenght; i++) {
          let node = new Node(value[i]);

          !this._root && (this._root = node);
          node._tail = this._tail;
          this._tail && (this._tail.next = node);
          this._tail = node;
          this._size++;
      }
    };

DoubleLinkedList.prototype.pop = function(value) {
    if(Array.isArray(value)){
        let last = value.length -1;
        value.length = last;
    }
    return value.length;
  };

  DoubleLinkedList.prototype.push = function(value) {
    if(Array.isArray(value)) {
      for(let i = 0; i < value.length; i++) {
          this._array[i] = value[i];
          this._size++;
      }
    }
  };
 
  DoubleLinkedList.prototype.shift = function(value) {
    if(Array.isArray(value)){
        let first = value[0];
        let tempArr = [];
        for(let i = 1; i < value.length; i++){
            tempArr[i - 1] = value[i];
        }
        return first;  
    }
  };
 
  DoubleLinkedList.prototype.shift = function(value) {
    if (this._root === null) {
        let temp = this._root;
        return undefined;
    } else {
        this._root.next = null;
        this.previous = this._root;
    }
    this._size--;

    return this._root;
  };

  DoubleLinkedList.prototype.slice = function (value) {
    this._array = value;
    tempArray = [];
    for(let i = 0; i < this._array.length - 2; i++){
        tempArray[i] =  this._array[i];
    }
    return tempArray;
  };

  DoubleLinkedList.prototype.splice = function (value) {
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

  DoubleLinkedList.prototype.getSize = function() {
      return this._size;
};

DoubleLinkedList.prototype.getString = function() {
    let result = '';
    let currentNode = this._root;

    result += '[';

    while(currentNode) {
        result += currentNode.value;
        if(currentNode.next){
            result += ', ';
        }
        currentNode = currentNode.next;
    }
    result += ']'; 
    
    return result;
};

  module.exports = DoubleLinkedList;
  
