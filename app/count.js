exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

     console.log(start);

    const setInt = setInterval(() => { 
      start = start +1;
      if(start <= end) 
        console.log(start);
    }, 100);


    return { cancel: function() {
      clearInterval(setInt)
    }};
  
  }
};
