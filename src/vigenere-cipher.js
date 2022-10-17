const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(revers) {
    this.direction = revers;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    this.alphabetObj = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "W",
      23: "X",
      24: "Y",
      25: "Z",
    };
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const resultArr = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let lenghShift = this.countLengthAlpha(message);
    const shiftArr = this.getShiftArr(lenghShift, key);
    let indexShift = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let oldInx = this.alphabet.indexOf(message[i]);
        let newInx = oldInx + shiftArr[indexShift];
        if (newInx >= 25) {
          newInx = newInx - 26;
        }
        let newValue = this.alphabetObj[newInx];
        //console.debug(oldInx);
        //console.debug(newInx);
        //console.debug(newValue);
        resultArr.push(newValue);
        indexShift++;
      } else {
        resultArr.push(message[i]);
      }
    }
    if (this.direction === false) {
      console.debug("FAAALSE", message, key);
      let tempResult = [];
      while (resultArr.length > 0) {
        tempResult.push(resultArr.pop());
      }

      return tempResult.join("");
    }
    return resultArr.join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    const resultArr = [];
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let lenghShift = this.countLengthAlpha(encryptedMessage);
    const shiftArr = this.getShiftArr(lenghShift, key);
    let indexShift = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        let oldInx = this.alphabet.indexOf(encryptedMessage[i]);
        let newInx = oldInx - shiftArr[indexShift];
        if (newInx < 0) {
          newInx = newInx + 26;
        }
        let newValue = this.alphabetObj[newInx];
        //console.debug(oldInx);
        //console.debug(newInx);
        //console.debug(newValue);
        resultArr.push(newValue);
        indexShift++;
      } else {
        resultArr.push(encryptedMessage[i]);
      }
    }
    if (this.direction === false) {
      console.debug("FAAALSE", encryptedMessage, key);
      let tempResult = [];
      while (resultArr.length > 0) {
        tempResult.push(resultArr.pop());
      }

      return tempResult.join("");
    }
    return resultArr.join("");
  }
  getShiftArr(length, key) {
    const shiftArr = [];
    let j = 0;
    for (i = 0; i < length; i++) {
      if (j === key.length) {
        j = 0;
      }
      shiftArr.push(this.alphabet.indexOf(key[j]));
      j++;
    }
    return shiftArr;
  }
  countLengthAlpha(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
