// 3rd Party
var $ = require('jquery');
var handlebars = require('handlebars');

// Local
var PersonCollection = require('./models/person-collection');

$(function(){
  // Setup my collection
  var people = new PersonCollection([
    {age: 42, firstName: 'Jimmy', lastName: 'John'},
    {age: 40, firstName: 'Wendy', lastName: 'Thomas'}
  ]);

  doTemplate('.container', '#people', {});

  people.each(function(person){
    console.log(person);
    doTemplate('.people', '#person', person.toJSON());
  });

  function doTemplate(target, source, context){
    var source = $(source).html();
    var template = handlebars.compile(source);
    $(target).append(template(context));
  }

});





/**
 * Models!
 */
var Person = require('./models/person');
var jimmy = new Person({age: 42, firstName: 'Jimmy', lastName: 'John'});
var wendy = new Person({age: 40, firstName: 'Wendy', lastName: 'Thomas'});

console.log(jimmy);

console.log(jimmy.get("age"));
console.log(jimmy.get("firstName"));
console.log(jimmy.get("lastName"));

console.log(jimmy.set({"age": 65}));

console.log(jimmy.get("age"));

console.log(jimmy.makeSandwich());

jimmy.sayName();
wendy.sayName();
