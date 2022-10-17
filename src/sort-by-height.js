const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ourArr = []
  const listIndex = [];
  const result = [];
  arr.forEach((num, index) => {
    if (num === -1) {
      listIndex.push(index);
    }
    else {
      ourArr.push(num);
    }
  })

  ourArr.sort((a, b) => a - b);
  while(listIndex.length > 0 || ourArr.length > 0){
    if(result.length  !== listIndex[0]){
      result.push(ourArr.shift());
    } else {
      result.push(-1);
      listIndex.shift();
    }

  }

  return result
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
