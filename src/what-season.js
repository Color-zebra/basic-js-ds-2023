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
function getSeason(date) {
    let error = new Error(`Invalid date!`)
    if (!date) return 'Unable to determine the time of year!';
    if (isNaN(Date.parse(date)) || (Object.getOwnPropertySymbols(date).length > 0)) throw error;
    let year = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn (fall)', 'autumn (fall)', 'autumn (fall)', 'winter',]
    return year[date.getMonth()];
  }

module.exports = {
  getSeason
};
