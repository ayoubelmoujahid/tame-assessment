exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /[1-9]/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z]).*?\1/.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/.test(str.toLowerCase())
  },

  captureThreeNumbers: function(str) {
    //contains 3 numbers
    if(/([0-9]){3}/.test(str)){
      //replace alpha char with ''
      numStr = str.replace(/[a-z]/gi, '') 
      return numStr.substring(0, 3)
    }
      else return false;
  },

  matchesPattern: function(str) {
    //the pattern: XXX-XXX-XXXX
   return /^([0-9]){3}-([0-9]){3}-([0-9]){4}$/g.test(str);
  },

  isUSD: function(str) {
    return /^\$?\d+((,\d{3}){2,})*\.?[0-9]?[0-9]?$/.test(str)
  }
};
