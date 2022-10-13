const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date/* date */) {
  try {
    date.getMonth
  } catch (err) {
    return 'Unable to determine the time of year!'
  }

  if(typeof date.getMonth != 'function'){
    //return 'Invalid date!'
    throw new Error('Invalid date!');
  }


   if (typeof date.getMonth != 'function'){
    throw new Error('Invalid date!');
  } 

 
  if (date.hasOwnProperty('toString')) {
    //return false

    throw new Error('Invalid date!');

  }
 

 // console.dir(date);

  
  
 
  if (date.getMonth) {
    let month = date.getMonth();
    console.debug(date);
    if (month >= 0 && month <= 1 || month === 11) {

      return 'winter';
    }
    else if (month >= 2 && month <= 4) {
      return 'spring';
    }
    else if (month >= 5 && month <= 7) {
      return 'summer';
    }
    else if (month >= 8 && month <= 10) {
      return 'autumn'
    }
    console.debug(date.getMonth());
  }
  if (typeof (date) === 'string') {
    if (date === 'winter') {
      return 'winter';
    }
    else if (date === 'spring') {
      return 'spring';
    }
    else if (date === 'summer') {
      return 'summer';
    }
    else if (date === 'autumn') {
      return 'autumn'
    }
    console.debug(date)
    console.debug('stringswss')
  }

  //throw new NotImplementedError('Invalid date!');
  /*  if () {
     return 'Unable to determine the time of year!';
     console.debug(date)
     throw new NotImplementedError('Unable to determine the time of year!');
   } */






  //throw new NotImplementedError('Not implemented');


}

module.exports = {
  getSeason
};
