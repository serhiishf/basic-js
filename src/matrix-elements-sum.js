const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    const bannedIndex = [];
    let result = 0;
    matrix.forEach(arr =>{
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != 0 && bannedIndex.indexOf(i) === -1){
                result += arr[i];
            } else if(arr[i] === 0){
                bannedIndex.push(i)
            }
        }
    })
    return result 
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
