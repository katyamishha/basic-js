const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(value === undefined){
      this.arr.push('( )');
    }else{
      this.arr.push('( ' + String(value) + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (typeof (position) === 'number' && position + 1 > 0 && position > 0 && position <= this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
