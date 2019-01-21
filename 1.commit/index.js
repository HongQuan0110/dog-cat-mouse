var Dog = require('./Dog');
var Cat = require('./cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
var cat = new Cat();
var mouse = new Mouse('Jerry', 10)

dog.eat(cat);
console.log(dog);