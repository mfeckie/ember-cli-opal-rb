/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-opal-rb',
  included: function (app) {
    this._super.included(app);

    app.import('vendor/opal.min.js');
    app.import('vendor/opal-parser.min.js');
  }
};
