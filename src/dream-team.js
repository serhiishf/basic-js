const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const correctArr = [];
  if (Array.isArray(members)) {
    members.forEach(item => {
      let temp = '';
      if (typeof item === 'string') {
        if (item[0] != ' ') {
          temp += item[0].toUpperCase();
        } else {
          for (let i = 0; i < item.length; i++) {
            if (item[i] != ' ') {
              temp += item[i].toUpperCase();
              break
            }
          }
        }
      }
      correctArr.push(temp);
    })
    correctArr.sort()
    let result = '';
    correctArr.forEach(e => {
      result += e;
    })
    return result;
  } else {
    return false
  }

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
