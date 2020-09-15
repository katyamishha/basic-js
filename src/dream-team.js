const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === null || members === undefined) return false;
  let dreamTeam = [];
  for(let i = 0; i<members.length; i++){
    if(typeof(members[i]) == 'string'){
      for(let j = 0; j<members[i].length; j++){
        if(members[i][j]!= " "){
          dreamTeam.push(members[i][j].toUpperCase());
          break;
        }
      }
    }
  }
  dreamTeam.sort();

  if(dreamTeam.length == 0) return false;
  return dreamTeam.join('');

};
