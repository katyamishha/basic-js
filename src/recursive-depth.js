const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthMax = 1;
    for (let i = 0; i < arr.length; i++) {
      let depth = 1;
      if (Array.isArray(arr[i])) {
        depth += this.calculateDepth(arr[i]);
        if (depth > depthMax) {
          depthMax = depth;
        }
      }
    }
    return depthMax;
  }
};