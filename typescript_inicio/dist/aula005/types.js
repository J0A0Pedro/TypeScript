"use strict";
//boolean (true/false)
let isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
//number 
let total;
total = 20.3;
//array 
let items;
items = ['foo', 'bar'];
//cria um array q só aceita numeros. Se trocarmos por string, ele só aceita string, o mesmo com boolean
let values;
values = [1, 2, 3];
//Existe essa forma tbm de declarar o tipo, e perceba que o Array está em maiúsculo. 
//tuple 
//Ele é um array q a gente ja sabe o numero de elementos dentro e tbm o tipo dele
let title;
title = [1, 'foo', 'bar', true];
//enum
//Ele serve pra criarmos um cojunto de chave-valor
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//Basicamente ele serve para podermos criar um conjunto de chaves e valores e conseguimos usar uma chamada mais facil de encontrar o valor que desejamos 
//any
//Significa qualquer coisa (Ele pode ser qualquer coisa)Ela n é muito bem vista. Usar o any é a mesma coisa de n usar nada. Pq acaba tirando o poder do typescript, q é sua tipagem forte. 
let coisa;
coisa = true;
coisa = 2;
coisa = 'foo';
coisa = Boolean;
//void
//É o mesmo que vazio. Não retornamos nada. É pra vc tipar funções onde vc sabe q n retorna nada. 
function logger() {
    console.log('foo');
}
//Mas n é aconselhados usá-los como tipos primitivos 
let variable; //n faz sentido, geralmente é usado undefined
//never
//Nunca vai retornar, ele joga uma exeção, ele para tudo
function error() {
    throw new Error('error');
}
//essa função n tem retorna nunca, ela só vai jogar o erro na tela
//object
//Tudo aquilo q n é nem s tring, array, boolean, number. O object é qualquer coisa q n seja desses tipos primitivos
let cart;
//cart = true //vai dar erro pq ele n é um objeto, ele é um boolean
//cart = 'oi' //vai dar erro pq ele n é uma string, ele é um objeto
cart = {
    key: 'oi',
    numb: 3333 - 4444,
    adm: true
};
//type inference
//Inferencia de tipo. Se ele passou uma string, essa variavel é uma string 
let message2 = 'mensagem definida';
//message2 = 23 //Não posso mudar esse valor, ele so aceita valores de novas strings. A inferencia de tipo serve pra isso, evitarmos ficar tipando coisas de forma redundante. O typescript tem inteligencia pra saber q se uma variavel recebe uma string, ela só vai aceitar outas strings, mas nenhum number, boolean etc...
window.addEventListener('click', (e) => {
    console.log(e.target);
});
//Ele consegue entender sem q vc precise ficar escrevendo tudo
