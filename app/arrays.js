exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
     return (arr || []).indexOf(item);
  },

  sum: function(arr) {
     return (arr || []).reduce((a,b) => a + b);
  },

  remove: function(arr, item) {
    let copyArr = arr.slice(0);
    if(copyArr) while (this.indexOf(copyArr, item) > -1) copyArr.splice(this.indexOf(copyArr, item), 1);
    return copyArr;
  },

  removeWithoutCopy: function(arr, item) {
    if(arr) while (this.indexOf(arr, item) > -1) arr.splice(this.indexOf(arr, item), 1);
    return arr;
  },

  append: function(arr, item) {
    return (arr || []).concat([item]);
  },

  truncate: function(arr) {
    let lastItemIndex = arr.length - 1
    if (arr && arr.length > 0) arr.splice(lastItemIndex, 1);
    return arr;
  },

  prepend: function(arr, item) {
    let newArr = arr.slice(0);
    newArr.unshift(item);
    return newArr;
  },

  curtail: function(arr) {
    if (arr && arr.length > 0) arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return (arr1 || []).concat(arr2 || []);
  },

  insert: function(arr, item, index) {
    if (arr && arr.length > index) arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    (arr || []).forEach(function(element){
      if(element == item) count = count + 1;
    });
    return count;
  },

  duplicates: function(arr) {
    if (arr) {
      var duplicated = [];
      arr.sort().forEach(function(element,index){
        if(element == arr[index - 1] &&  duplicated.indexOf(arr[index - 1]) == -1)
          duplicated.push(arr[index-1])
              });
      return duplicated;
    }
    return arr;
  },

  square: function(arr) {
    return (arr || []).map(function(item){
      return item * item;
    });
  },

  findAllOccurrences: function(arr, target) {
    var indexArr = [];
    (arr || []).forEach(function(element,index){
      if(element == target) indexArr.push(index)
    });
    return indexArr;
  }
};
