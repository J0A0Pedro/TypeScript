"use strict";
let x = 10;
x = 20;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
firstName = "Joao";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Joao",
    age: 18
};
console.log(user);
console.log(user.name.toUpperCase());
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
const userId2 = 10;
const productId2 = "00001";
const shirId2 = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Gola Pequena",
    size: Size.G
};
console.log(camisa);
let teste;
teste = "autenticado";
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}!`;
}
console.log(sayHelloTo("Joao"));
function logger(msg) {
    console.log(msg);
}
console.log("Teste!");
function greeting(name, greet) {
    console.log(`Olá ${greet} ${name}`);
}
greeting("Jose");
function greeting2(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting2("Joao");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 2, n2: 4 }));
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info == "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Não foi passado um número, só um ${info}`);
}
doSomething(33);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
const a3 = [true, false, true];
console.log(showArraysItems(a1));
console.log(showArraysItems(a2));
console.log(showArraysItems(a3));
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
