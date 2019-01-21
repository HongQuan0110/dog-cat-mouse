function Mouse(name, age) {

    this.name = name;
    this.age = age;
    this.isDead = false;
}

Mouse.prototype.die = function () {
    this.isDead = true;
}

Mouse.prototype.run = function () {
    console.log('Run');
}

Mouse.prototype.sleep = function () {
    console.log('Sleep...');
}

module.exports = Mouse;