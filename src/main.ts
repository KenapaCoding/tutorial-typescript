interface User {
    name: string,
    age: number,
    isAdmin?: boolean,
    greet():string
}

interface User {
    status?:boolean
}

const user1:User = {
    name: "John Doe",
    age: 22,
    // isAdmin: true
    greet() {
        return "Hello There"
    },
}


// console.log(user1)
// console.log(user1.greet())

interface Person{
    name: string,
    age: number
}

interface Employee extends Person {
    employeeId : number
}

const employee1:Employee = {
    name : 'John Doe',
    age : 32,
    employeeId : 100098
}

// index signature

interface StudentScoreByName {
    [key:string] : number
}

const studentScore:StudentScoreByName = {
    budi : 90,
    yanto : 78
}

interface Add {
    (a:number, b:number):number
}

const add:Add = (a,b) =>  a + b

console.log(add(2,7))

