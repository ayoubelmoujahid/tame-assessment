exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '';
    var previous = '';
    var count = 1;
    //for each char in str
    Array.from(str).forEach(function(char) {
      //if char equals previous and total(char)<amount
      if (char == previous) {
        if (count < amount) {
          //increment count and add char to result
          count++;
          result = result + char;
        }
      }//otherwise update previous and reset counter
       else {
        previous = char;
        result = result + char;
        count = 1;
      }
    });
    return result;
  },

  wordWrap: function(str, cols) {
    let strToArray = str.split(' ');
    //merge cells with less than 2 characters
    let result = [];
    result.push(strToArray[0]);
    for (var i = 1; i < strToArray.length; i++) {
      //test if item length < 2 => we merge it with last element of result
      if (strToArray[i].length < 2) {
        var indexLastItem = result.length - 1;
        result.splice(indexLastItem, 1, result[indexLastItem] + ' ' + strToArray[i]);
      }//otherwise we add item to
       else {
        result.push(strToArray[i]);
      }
    }
    //join elements
    return result.join('\n');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
