//string, number, boolean, ...
let x: number = 10;

x = 20;



console.log(x);


//inferencia x annotation

let y = 12; // isso é uma inferencia

// y = "teste" não funciona

let z: number = 12; //isso é uma annotation 
//é a mesma coisa que let y = 12


//TIPOS BÁSICOS:

let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;


//String != string 

firstName = "Joao";

console.log(firstName);


//OBJECT

const myNumbers: number[] = [1, 2, 3];


console.log(myNumbers);
console.log(myNumbers.length);

console.log(firstName.toUpperCase());

// se déssemos toUpperCase() em um array de números no js puro, ele n daria erro, mas no ts ele mostra o erro, já que n tem como aumentar um number


myNumbers.push(5);
console.log(myNumbers);

//TUPLAS

let myTuple: [number, string, string[]]; //criando uma tupla é assim

myTuple = [5, "teste", ["a", "b"]]; //vc tem que colocar o conteúdo na mesmas ordem em que vc definiu lá em cima, caso contrário dará erro


//SE FIZERMOS ASSIM DARÁ ERRO:

//myTuple = [true, false, true] 

//Ele irá falar q o tipo booleano n pode ser atribuído ao tipo number, q foi o primeiro tipo definido no array


//object literals -> {prop: value}


const user: {name: string, age: number} = {
    name: "Joao",
    age: 18
}
console.log(user);
console.log(user.name.toUpperCase());


//user.job  = "Programador" //N conseguimos adicionar assim

//se colocássemos outra chave no lugar de name ele n aceitaria pq a chave já havia sido definida lá em cima, assim como o age. Os dados que elas receberiam tbm n poderia ser de outro tipo, elas só aceitariam string para NAME e number para AGE. Outro coisa é que n pode faltar chave, se vc definiu AGE lá em cima, vc tem que usá-la.



//OUTRO TIPO QUE TEMOS NO TS QUE NÃO TEM NO JS É O: any

//any é um valor q aceita qualquer tipo de dado:

let a: any = 0;

a = "teste"
a = true
a = []

//Ele n é mt usado pq acaba com o propósito do ts. Então, em raros casos, quando não depender do tipo de dado, ou quando a gnte prevê que pode retornar muitos tipos de dados;


//A SOLUÇÃO PARA O ANY:

//Ah, eu  não sei quantos tipos de dados aquela variável pode retornar, number, sttring, boolean etc.. Isso pode ser resolvido usando union type:

//UNION TYPE

let id: string | number = "10"

id = 200

//id = true //deu erro, ele n aceitou booleano aqui
//id = [] //tbm deu erro


//TYPE ALIAS

//É usado para n ficar repetitivo a definição do tipo da variável. Seria um saco tem q ficar criando variável e digitando seu tipo q já sabemos qual é 

type myIdType = number | string


const userId: myIdType = 10;

const productId: myIdType = "00001";

const shirId: myIdType = 123;

//ISSO É A MESMA COISA QUE:

const userId2: number | string = 10;

const productId2: number | string = "00001";

const shirId2: number | string = 123;

//Então usamos o myIdType que já tem os tipos definidos como uma variável e a adicionamos ela nos locais que queremos o tipo






//ENUM

//É outro tipo de dado que enumera uma coleção e a gente consegue utilizar dados mais complexos de forma mais simples

//tamanho de roupas (size: Médio, size: Pequeno)

enum Size {
    P = "Pequeno", 
    M = "Médio",
    G = "Grande"
}

//como referenciamos ele? Assim:

const camisa = {
    name: "Gola Pequena",
    size: Size.G

}
console.log(camisa)




//LITERAL TYPES:

//É, basicamente, determinar um valor como um tipo:

let teste: "autenticado" | null

//teste = "outrovalor"

teste = "autenticado"

//Isso é bem utilizado com null. Assim temos como reiniciar minha variavel ou iniciar ela sem valor e ai posso alterar aquele valor em alguma determinado hora do sistema. 
//Exemplo: usuário logou, ai eu coloco "autenticado", se n estiver, eu coloco null



//FUNCTIONS:

function sum(a: number, b:number) {
    return a + b
}

//agr eu n consigo colocar outros valores q n sejam numeros

console.log(sum(12, 12));

//console.log(sum("12", "12")) Não funciona pq é string, assim como n funcionaria com outros tipos além do number q foi definido



function sayHelloTo(name: string): string {
    return `Hello ${name}!`
}

console.log(sayHelloTo("Joao")); //O retorno tbm tem q ser uma string pq sayHelloTo tem o tipo definido tbm, assim como o name


//E é claro, tem funções que n retornam nada, e a gente costuma tipar essas funções tbm:

function logger(msg: string): void {
    console.log(msg);
}

console.log("Teste!");

//Isso não é um problema, mas quando ele não retorna nada nós podemos tipas a função assim: logger: void, ela n possui retorno





function greeting( name: string, greet?: string){
    console.log(`Olá ${greet} ${name}`)
}

//Colocando interrogação na frente do nome da chave, vc esta dizendo q pode ou n usar ela, mas ai ela vai ficar undefined 

greeting("Jose");

//Como tratar para n mostrar o undefined? Usando um pouco de lógica:




function greeting2( name: string, greet?: string): void {
   if(greet){
       console.log(`Olá ${greet} ${name}`);
   }
   else{
       console.log(`Olá ${name}`);
   }
}
//esta checando se o argumento vem ou não
greeting2("Joao");




//INTERFACES:


//As interfaces padronizam algo para podermos reutilizar como tipos

interface MathFunctionParams{
    n1: number,
    n2: number
}


function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2:2}));


//Podemos reaproveitar
//OUTRO EXEMPLO:

function multiplyNumbers (nums:MathFunctionParams){
    return nums.n1 * nums.n2
}
console.log(multiplyNumbers({n1:2, n2:4}));

//Podemos tipar variáveis com isso tbm:

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));


//NARROWING
//É checagem de tipos:

function doSomething(info: number | boolean){

    if(typeof info == "number"){
        console.log(`O número é ${info}`)
        return
    }
    console.log(`Não foi passado um número, só um ${info}`);
}

//Fizemos aqui o narrowing de typeof para verificar  se o tipo de dado é numérico

doSomething(33);
doSomething(true);




//GENERICS:
//É bem amplo e um pouco complexo. Os geneic são utilizados pra qualquer coisa:

function showArraysItems<T>(arr: T[]){

    //A partir de agora estamos trabalhando com qualquer tipo de array quando colocamos o T entre <> e tipamos ele T[]. 

    arr.forEach((item) =>{
        console.log(`ITEM: ${item}`)
    })

}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
const a3 = [true, false, true];

console.log(showArraysItems(a1));

console.log(showArraysItems(a2));

console.log(showArraysItems(a3));

//QUANDO EU TENHO ALGO QUE NÃO ESTÁ DETERMINADO POR UM TIPO, E EU PRECISO Q ACEITE VÁRIOS, NÓS VAMOS SEMPRE OPTAR POR GENERCIS AO INVÉS DE ANY







//CLASSES:
class User{
    name
    role
    isApproved

    //vai dar erro ao n tipar ele ai em cima( name: string, role: string etc...), mas teriamos q fazer isso mais de uma vez, oq seria redundante, então tipamos ele no constructor lá embaixo

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuário é: ${this.name}`)  
    }

    showUserRole(canShow: boolean){
        if(canShow){
            console.log(`A idade do usuário é: ${this.role}`);
            return
        }

        console.log("Informação restrita")
        
    }
}

const zeca = new User ("Zéca", "Admin", true);
console.log(zeca)

zeca.showUserName()

zeca.showUserRole(false);










