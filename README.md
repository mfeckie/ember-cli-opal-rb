[ ![Codeship Status for mfeckie/ember-cli-opal-rb](https://codeship.com/projects/2a6e98f0-eef3-0132-1b5c-3628cb5d23b0/status?branch=master)](https://codeship.com/projects/84294)

# Ember-cli-opal-rb

[Opal.rb](http://opalrb.org/) is a Ruby to JavaScript compiler.

This addon simply includes Opal as a Service in your Ember application.

## Installation

`ember install ember-cli-opal-rb`

## Usage

There are only really two methods exposed `compileRuby` and `run`

Here's an example of there usage.

```js
import Ember from 'ember';

export default Ember.Component.extend({
  opal: Ember.inject.service(),
  someFunc: function () {
    var compiler = this.get('opal')
    var textToCompile = this.get('text');

    //This will give you the Ruby code as JS
    var compiled = compiler.compileRuby(textToCompile);
    //This will compile and execute the Ruby code
    compiler.run(textToCompile);
  }
});
```

## Dummy app

If you clone the repo and run the server there is an example of a live Ruby to JS converter.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember try:testall`
