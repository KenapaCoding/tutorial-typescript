class Calculator {
    static pi:number = 3.14

    static calculateArea(radius:number):number{
        return Calculator.pi * radius * radius
    }
}

const calc = new Calculator()


console.log(Calculator.calculateArea(5))