"use strict";
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('Woof woof !');
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('Miaw miaw !');
    }
}
const Pitbull = new Dog();
const kucing = new Cat();
Pitbull.makeSound();
kucing.makeSound();
