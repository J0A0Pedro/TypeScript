//TYPE ALIAS
type Uid = number | string | undefined


function logDetails(uid: Uid, item: string){

    console.log(`A product with ${uid} has a title as ${item}.`)

}

//Como estamos usando a mesma coisa, podemos criar um type alias q vai ser um tipo q vai unir esses dois e reutilizar de uma forma mais simples mostrado acima. Com ele conseguimos facilitar o código pra que n precisemos ficar escrevendo a mesma coisa várias vezes.


//Também pode ser usado assim:

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform( platform: Platform) {
    return platform 
}
renderPlatform('Windows')//certo
//renderPlatform('ios') //errado. Ele n pode ser usado. A plataforma só pode ser um desses três. Se adicionarmos 'ios' no type Platform ele vai começar a funcionar




function logInfo(uid: Uid, user: string){  
    console.log(`An user with ${uid} has a name as ${user}.`)
}


logDetails(123, 'sapato') //certo
logDetails('123', 'sapato') //errado, mas se usarmos o union dará certo

logInfo(123, 'Joao')//certo
logInfo('123', 'Joao')



//Para conseguirmos falar que o uid poder ser de um tipo ou de outro, utilizamos o Union ( number | string )