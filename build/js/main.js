"use strict";
class Calculator {
    static calculateArea(radius) {
        return Calculator.pi * radius * radius;
    }
}
Calculator.pi = 3.14;
const calc = new Calculator();
console.log(Calculator.calculateArea(5));
