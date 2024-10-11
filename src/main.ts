class Animal{
    makeSound(){
        console.log("Some generic animal sound")
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log('Woof woof !')
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log('Miaw miaw !')
    }
}

const Pitbull = new Dog()
const kucing = new Cat()

Pitbull.makeSound()
kucing.makeSound()