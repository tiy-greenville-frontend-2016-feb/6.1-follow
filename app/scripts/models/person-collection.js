var Backbone = require('backbone');
var Person = require('./person');

var PersonCollection = Backbone.Collection.extend({
  model: Person
});

module.exports = PersonCollection;
