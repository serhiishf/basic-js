const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.arr[position - 1]) {
      this.arr.splice(position - 1, 1);
      return this
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;

    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  finishChain() {
    let resultStr = this.arr.join("~~");
    this.arr = [];
    return resultStr;
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};

module.exports = {
  chainMaker,
};
