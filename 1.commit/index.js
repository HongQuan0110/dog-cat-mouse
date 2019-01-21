var Dog = require('./Dog');
var Cat = require('./cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
var cat = new Cat();
var mouse = new Mouse('Jerry', 10)

try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat eating');
}

console.log(cat)
dog.eat(cat);
console.log(dog);