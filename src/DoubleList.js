const IList = require('./IList');

const Node = function(value) {
    this.data = value;
    this.next = null;
    this.previous = null;  //uzel sozdaniye
};

const DoublList =  function() {
    IList.apply(this, arguments); // rojdayetsa putevoditel kot napravlayt
    this._root = null; // nacalo
    this._tail = null; //konec
    this._size = 0; 
}

  DoublList.prototype = Object.create(IList.prototype);
  DoublList.prototype.constructor = ArrayList;

  DoublList.prototype.init = function(value) {
    let businka = new Node(value);

    if(this._size) {
        this._tail.next = businka;
        businka.previous = this._tail; // sozdayem ssilku na pred businku
        this._tail = businka; // ukaz cto eto posled businka
    } else {
        this._tail = businka;
        this._root = businka;
    }
        this._size++;

        return businka;
  };

  DoublList.prototype.clear = function() {

  };

  DoublList.prototype.shift = function(value) {
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

  module.exports = DoublList;
  
