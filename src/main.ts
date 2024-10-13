// partial

// interface User{
//     id:number,
//     name:string,
//     email:string
// }

// function updateUser(user:Partial<User>){
//     console.log(user)
// }

// updateUser({name:"John"})

// Required

interface User{
    id?:number,
    name?:string,
    email?:string
}

const user1:Required<User> = {
    id:1,
    name:"John",
    email:"john@gmail.com"
}

// Readonly

const user2:Readonly<User> = {
    id:2,
    name:"Jane",
    email:"jane@gmail.com"
}
// console.log(user2.name)
// user2.name = "Jane n june"
// console.log(user2.name)

// Pick

type UserInfo = Pick<User, 'id' | 'name'>

const userInfo1:UserInfo = {
    id: 4,
    name: 'Udin'
}

// Omit

type UserWithoutEmail = Omit<User, 'email'> 

const user5:UserWithoutEmail = {
    id: 5,
    name:"susanti"
}

// Record

type UserRoles = 'admin' | 'user' | 'guest'

const users:Record<UserRoles, string[]> = {
    admin: ['alice','bob'],
    user: ['charlie'],
    guest: ['john']
}

// extract

// type StringOrNumber = string | number
// type OnlyString = Extract<StringOrNumber, string>


// exclude

type StringOrNumber = string | number
type OnlyNumber = Exclude<StringOrNumber, string>

// NonNullable
type NullableString = string | null | undefined

type NonNullableString = NonNullable<NullableString>

// ReturnType

function getUser(){
    return {id:1, name:"alice"}
}

type UserReturnType = ReturnType<typeof getUser>

// InstanceType
class Person{
    constructor(public name:string){
        this.name = name
    }
}

type PersonInstance = InstanceType<typeof Person>