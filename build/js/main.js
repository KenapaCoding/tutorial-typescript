"use strict";
// function identity<T,U>(value:T):T{
//     return value
// }
// console.log(identity<string, string>("Hello There !"))
// console.log(identity<number, string>(1290))
// console.log(identity("hello world"))
// class Box<T> {
//     constructor(public content:T) {
//         this.content = content
//     }
//     getContent():T {
//         return this.content
//     }
// }
// let numberBox = new Box<number>(123)
// let stringBox = new Box<string>("I love Rendang")
// console.log(numberBox.getContent())
// console.log(stringBox.getContent())
// interface User<T,U>{
//     name: T,
//     age: U
// }
// const user1:User<string,number> = {
//     name: "Budiman",
//     age: 42
// }
// function logLength<T extends {length:number}>(item:T):void {
//     console.log(item.length)
// }
// logLength<string>("Hello")
// logLength([1,2,3,4])
// logLength<number>(123) error
function logMessage(message) {
    console.log(message);
}
logMessage(90);
