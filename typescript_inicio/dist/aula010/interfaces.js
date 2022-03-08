"use strict";
//interfaces nada mais são do q conjuntos de dados para descrever a estrutura da um objeto. Diferente do type aliases q podiamos descrever um objeto e tbm um conjunto de tipos primitivos, a interface trabalha exclusivamente para objetos. 
const tlou = {
    id: 123,
    title: "The Last Of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
};
console.log(tlou.title);
console.log(tlou.description);
console.log(tlou.genre);
console.log(tlou.platform);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftBehind = {
    title: "The  Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"]
};
//todas as coisas do Game o DLC vai ter e mais as coisas q foram definidas dentro da DLC
//temos como implementar uma classe baseado em uma interface
class createGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
//isso sigifica q minha classe createGame precisa ter todos os tipos que são descritos na nossa interface Game
//diferente do type aliases que serve também para primitivo, as interfaces servem somente para objetos, então normalmente vc vai ver interfaces para criação de objetos, e objetos que são mais complexos. Quando a gente tem coisas menores, mais simples, objetos pequenos simplificados ou só tipos primitivos você vera type aliases
