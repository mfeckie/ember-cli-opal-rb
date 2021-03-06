import { moduleFor, test } from 'ember-qunit';

moduleFor('service:opal', 'Unit | Service | opal');

test('It compiles a ruby string to js', function (assert){
  var service = this.subject();
  var output = service.compileRuby("'Hello World!'");
  var outputRegExp = /Generated by Opal/;
  assert.ok(outputRegExp.test(output));
});

test('It runs Ruby code as js', function (assert){
  var service = this.subject();
  var result = service.run("'Hello World!'");
  assert.equal(result, "Hello World!");
});
