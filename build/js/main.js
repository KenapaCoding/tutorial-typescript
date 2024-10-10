"use strict";
// function greet(name : string = "Guest", age?:number):string{
//     if(age){
//         return `Hello ${name}, your age ${age} years old.`
//     }
//     return `Hello ${name}`
// } 
// console.log(greet("Ranggo"))
// console.log(greet(undefined, 26))
// void 
function logMessage(message) {
    console.log(message);
}
// never
function throwError(message) {
    throw new Error(message);
}
