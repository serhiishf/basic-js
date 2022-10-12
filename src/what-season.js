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
/*     if(date.getMonth){
        let month = date.getMonth();
        console.debug(date);
        if(month >= 1 && month <= 2 || month === 12){
            
          return 'winter';
        }
        else if(month >= 3 && month <= 5){
          return 'spring';
        }
        else if(month >= 6 && month <= 8){
          return 'summer';
        }
        else if(month >= 9 && month <= 11){
          return 'autumn'
        }
        console.debug(date.getMonth());
    }
    if(typeof (date) === 'string'){
        if(date === 'winter'){
            return 'winter';
          }
          else if(date === 'spring'){
            return 'spring';
          }
          else if(date === 'summer'){
            return 'summer';
          }
          else if(date === 'autumn'){
            return 'autumn'
          }
          console.debug(date)
        console.debug('stringswss')
    }
 */


    
/*     if(!date === false){
        return false;
         console.debug(!date)
        throw new NotImplementedError('Invalid date!'); 
    }
 */

    throw new NotImplementedError('Not implemented');

  
}

module.exports = {
  getSeason
};
