exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
    return fetch('/data/testdata.json')
            .then(res => res.json())
            .then(data => new Promise(res => res(data.people.map(p => p.name).sort())));
  }
};
