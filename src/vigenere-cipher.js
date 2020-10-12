const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(toReverse = true) {
    this.toReverse = toReverse;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = [],
      count = 0;

    for (let i = 0; i < message.length; i++) {
      if (count > key.length - 1) { 
        count = 0;
      }
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        result.push(message[i].charCodeAt());
      } else {
        result.push((message[i].charCodeAt() + key[count].charCodeAt()) % 26 + 65);
        count++;
      }
    }

    if (this.toReverse) {
      return String.fromCharCode(...result);
    } else {
      return String.fromCharCode(...result.reverse());
    };

  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let result = [],
        count = 0;

    for (let i = 0; i < message.length; i++) {
      if (count > key.length - 1) { 
        count = 0;
      }
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        result.push(message[i].charCodeAt())
      } else {
        result.push((message[i].charCodeAt() - key[count].charCodeAt() + 26) % 26 + 65);
        count++;
      }
    }

    if (this.toReverse) {
      return String.fromCharCode(...result);
    } else {
      return String.fromCharCode(...result.reverse());
    };
  }
}

module.exports = VigenereCipheringMachine;