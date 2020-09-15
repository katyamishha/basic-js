const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  let rateConst, halfLife;

  if (typeof (sampleActivity) !== 'string' || typeof (sampleActivity) == 'number' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  if (isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  rateConst = LN2 / HALF_LIFE_PERIOD;
  halfLife = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / rateConst;
  return Math.ceil(halfLife);
};