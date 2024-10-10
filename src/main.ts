// function greet(name : string = "Guest", age?:number):string{

//     if(age){
//         return `Hello ${name}, your age ${age} years old.`
//     }
//     return `Hello ${name}`
// } 

// console.log(greet("Ranggo"))
// console.log(greet(undefined, 26))

// void 
function logMessage(message:string):void {
    console.log(message)
}

// never
function throwError(message:string):never{
    throw new Error(message)
}