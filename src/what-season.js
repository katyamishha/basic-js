const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == undefined){
    return 'Unable to determine the time of year!';
  }else{

    try { date.getYear(); } catch(e) { throw new Error(e); }

    let monthCount = date.getMonth();
    if(monthCount == 0 || monthCount == 1 ||monthCount == 11 ){
      return 'winter';
    }else if(monthCount >= 2 && monthCount <= 4){
      return 'spring';
    }else if(monthCount >= 5 && monthCount <= 7){
      return 'summer';
    }else if(monthCount >= 8 && monthCount <= 10){
      return 'autumn';
    }else{
      throw new Error();
    }

  }
};
