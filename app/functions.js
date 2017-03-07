exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(value){
      return str + ', ' + value;
    } 
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(item) {
      return function(){
        return fn(item);
      }
    }); 
  },

  partial: function(fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    } 
  },

  useArguments: function() {
    var sum = 0;
    ([...arguments] || []).forEach(function(arg){
      sum = sum + arg;
    });
    return sum;
  },

  callIt: function(fn) {
    return fn.apply(null, [...arguments].slice(1));
  },

  partialUsingArguments: function(fn) {
    let fnArgs = [...arguments].slice(1) || [];
    return function() {
      return fn.apply(null, fnArgs.concat([...arguments] || []));
    };
  },

  curryIt: function(fn) {
    return function(a){
      return function(b) {
        return function(c) {
          return fn(a, b, c)
        }
      }
    } 
  }
};
