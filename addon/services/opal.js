import Ember from 'ember';

export default Ember.Service.extend({
  compileRuby: function (rubyString) {
    return Opal.compile(rubyString);
  },
  run: function (rubyString) {
    return eval(this.compileRuby(rubyString));
  }
});
