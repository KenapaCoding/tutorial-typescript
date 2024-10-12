class Person{
    constructor(private _age:number){
        this._age = _age
    }

    get age():string {
        return `${this._age} years old`
    }

    set age(newAge:number) {
        if(newAge > 0){
            this._age = newAge
        } else {
            console.log('Invalid Age')
        }
    }

}

const person1 = new Person(20)

// console.log(person1._age)
console.log(person1.age)

person1.age = -3
console.log(person1.age)