"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Windows'); //certo
//renderPlatform('ios') //errado. Ele n pode ser usado. A plataforma só pode ser um desses três. Se adicionarmos 'ios' no type Platform ele vai começar a funcionar
function logInfo(uid, user) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}
logDetails(123, 'sapato'); //certo
logDetails('123', 'sapato'); //errado, mas se usarmos o union dará certo
logInfo(123, 'Joao'); //certo
logInfo('123', 'Joao');
//Para conseguirmos falar que o uid poder ser de um tipo ou de outro, utilizamos o Union ( number | string )
