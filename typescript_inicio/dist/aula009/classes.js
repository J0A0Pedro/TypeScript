"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
const will = new UserAccount('Joao', 18);
console.log(will);
will.logDetails();
//05:00
