var Backbone = require('backbone');


var PersonModel = Backbone.Model.extend({
  defaults:{
    'gender': 'female'
  },
  initialize: function(){
    console.log('New Person Created!');
  },
  makeSandwich: function(){
    return 'ham and cheese';
  },
  sayName: function(){
    console.log(this.get("firstName") + " " + this.get("lastName"));
  }
});

var person = new PersonModel();

module.exports = PersonModel;
