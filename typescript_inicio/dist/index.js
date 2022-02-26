"use strict";
let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let btn = document.getElementById("btn");
function sum(a, b) {
    return a + b;
}
btn.addEventListener("click", function () {
    alert(sum(Number(n1.value), Number(n2.value)));
});
