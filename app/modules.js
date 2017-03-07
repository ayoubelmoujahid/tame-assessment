exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    const mod = {
      name: str2,
      greeting: str1,
      sayIt: () => `${mod.greeting}, ${mod.name}`
    };
    return mod;
  }
};
