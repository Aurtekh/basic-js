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
  let arr = [];
  if (members === null || members === undefined) {
    return false;
  }
  console.log(members)
  let string = '';
  for (let i =0; i< members.length; i++) {
    if (typeof(members[i]) === 'string') {
      string = members[i].replace(/\s+/g,'');
      arr.push(string[0].toUpperCase())
    }
  }
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};
