exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var that=this;
    let files = [];
    if(data.files) data.files.forEach( function(file) {
      if (!dirName || file.dir == dirName) {
        if (file.files) files = files.concat(that.listFiles(file));
        else files.push(file);
      }
    });
    return files;
  },

  permute: function(arr) {
    const permuteHelper = (arr) => {
      let result = [];
      // array contains only 2 numbers
      if (arr.length == 2) {

        result.push(arr);
        result.push(arr.slice(0).reverse());

      } 
      //array contains more than 2 numbers
      else if (arr.length > 2) {

        arr.forEach(function(item, index) {

          let prefix = item;
          let copy_arr = arr.slice(0);
          copy_arr.splice(index, 1);

          permuteHelper(copy_arr).forEach(function (element){

            result.push([prefix].concat(element));
            result.push([prefix].concat(element).reverse());

          });
        });
      }
      return result;
    };
    let result = [];
    let permutes = permuteHelper(arr);
    //Remove repeated data
    permutes.forEach(function(item) {
       if (result.join(',').indexOf(item.join(',')) == -1) 
          result.push(item.slice(0));
    });
    
    return result;

  },

  fibonacci: function(n) {
    if (n <= 2) 
      return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);

  },

  validParentheses: function(n) {
  if (n == 0) 
    return [""];
    var result = [];

    for (var i = 0; i < n; i++) {
        let opened = this.validParentheses(i);
        let closed = this.validParentheses(n - i - 1);

        for (let i = 0; i < opened.length; i++){
          for (let j = 0; j < closed.length; j++){
            result.push("(" + opened[i] + ")" + closed[j]);
          }
                
        }
            
    }

    return result;
  }
};
