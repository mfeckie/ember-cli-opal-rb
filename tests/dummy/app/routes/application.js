import Ember from 'ember';

export default Ember.Route.extend({
  opal: Ember.inject.service(),
  model: function () {
    var opal = this.get('opal');
    var sourceObject = Ember.Object.extend({
      source: 'puts "Hello World!"'
      }).create();
    sourceObject.output = Ember.computed('source', function (key, value) {
      var s =  this.get('source');
      return opal.compileRuby(s);
    });
    return sourceObject;
  }
});
