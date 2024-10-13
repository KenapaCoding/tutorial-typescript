"use strict";
// partial
const user1 = {
    id: 1,
    name: "John",
    email: "john@gmail.com"
};
// Readonly
const user2 = {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com"
};
const userInfo1 = {
    id: 4,
    name: 'Udin'
};
const user5 = {
    id: 5,
    name: "susanti"
};
const users = {
    admin: ['alice', 'bob'],
    user: ['charlie'],
    guest: ['john']
};
// ReturnType
function getUser() {
    return { id: 1, name: "alice" };
}
// InstanceType
class Person {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
