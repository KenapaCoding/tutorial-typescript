// type aliases
type ID = string|number

let userID:ID;
let postID:ID;

userID = 123

console.log(userID)

type User = {
    id:number,
    name:string,
    online:boolean
}

const user1:User = {
    id: 1,
    name: 'Ranggo',
    online: true
}

const user2:User = {
    id:2,
    name:'Pato',
    online: false
}

console.log(user1)