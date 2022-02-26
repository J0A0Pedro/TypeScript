let n1 = document.getElementById("num1") as HTMLInputElement;
let n2 = document.getElementById("num2") as HTMLInputElement;
let btn = document.getElementById("btn")!;


function sum(a: number, b: number){
    return a + b
}


btn.addEventListener("click", function() {
    alert(sum(Number(n1.value), Number(n2.value)))
});



