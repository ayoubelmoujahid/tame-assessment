exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return this.convertToBinary(num)[8 - bit] | 0;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let binary = (num >>> 0).toString(2);
    let rest = 8 - binary.length;
    return `${Array.from({length: rest}, function(val, i){ return '0'})}${binary}`;
  },

  multiply: function(a, b) {
    return parseFloat((a * b).toFixed(Math.max(a.toString().length, b.toString().length)));
  }
};
