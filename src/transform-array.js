const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const result = [];
  const doublNext = '--double-next';
  const doublPrev = '--double-prev';
  const discarbNext = '--discard-next';
  const discarbPrev = '--discard-prev';
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  let simpleArr = true;
  arr.forEach(elem => {
    if (elem === doublNext || elem === doublPrev || elem === discarbNext || elem === discarbPrev) {
      simpleArr = false
    }
  })
  if (simpleArr) {
    return arr
  }

  arr.forEach((num, index) => {
    let  prev = false;
    let next = false;
    if (arr[index - 1]) {
      prev = arr[index - 1];
    } if (arr[index + 1]) {
      next = arr[index + 1];
    }
/*     
    if(index === 0 && (num === doublPrev || num === discarbPrev || typeof num === 'boolean') ){
        result.push(num);
    }
 */
    if (typeof num === 'number') {
      //просто число и вокруг числа
      if (prev != discarbNext && prev != doublNext && next != doublPrev && next != discarbPrev) {
        result.push(num)
      }
      //если предыдущий != инструкции к этому значению
      if (prev != doublNext && prev != discarbNext) {
        if(next === doublPrev){
          doublePush(num, result)
        }
      }
      //если следующий != инструкции к этому значению
      if (next != doublPrev && next != discarbPrev) {
        if(prev === doublNext){
          doublePush(num, result)
        }
      }
      //если и предыдущий и следующий равны инструкциям к этому значению
      if(prev === doublNext && next === doublPrev){
        result.push(num);
        result.push(num);
        result.push(num);
      }
      if(prev === doublNext && next === discarbPrev){
        result.push(num);
      }
      if((prev === discarbNext || prev === doublNext) &&  (next === doublPrev && next === discarbPrev)){
        if((prev === doublNext && next != discarbPrev) || (prev != discarbNext && next === doublPrev)){
          doublePush(num, result)
        }
        
       
      }
    }
    function doublePush(item, arr){
      arr.push(item);
      arr.push(item);
    }


  })
    
/*     if (typeof arr[0] === 'string') {
      return result
    } */
   
  return result
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
