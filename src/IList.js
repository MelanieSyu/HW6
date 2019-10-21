function IList() {}

IList.prototype.clear = function() {console.log('IList clear'); }
IList.prototype.toString = function() {console.log('IList toString'); }
IList.prototype.getSize = function() {console.log('IList getSize'); }
IList.prototype.toSort = function() {console.log('IList toSort'); }
IList.prototype.push = function() {console.log('IList push'); }
IList.prototype.init = function() {console.log('IList init'); }
IList.prototype.pop = function() {console.log('IList pop'); }
IList.prototype.shift = function() {console.log('IList shift'); }
IList.prototype.unshift = function() {console.log('IList unshift'); }
IList.prototype.toSplice = function() {console.log('IList toSplice'); }
IList.prototype.toSlice = function() {console.log('IList toSlice'); }




module.exports = IList;