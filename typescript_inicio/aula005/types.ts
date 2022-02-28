//boolean (true/false)

let isOpen: boolean
isOpen = true


//string ('foo', "foo", `foo`)

let message: string
message = `foo ${isOpen}`


//number 

let total: number
total = 20.3



//array 

let items: string []
items = ['foo', 'bar']

//cria um array q só aceita numeros. Se trocarmos por string, ele só aceita string, o mesmo com boolean

let values: Array<number>
values = [1, 2, 3]

//Existe essa forma tbm de declarar o tipo, e perceba que o Array está em maiúsculo. 





//tuple 
//Ele é um array q a gente ja sabe o numero de elementos dentro e tbm o tipo dele

let title: [number, string, string, boolean]

title = [1, 'foo', 'bar', true]



//enum
//Ele serve pra criarmos um cojunto de chave-valor

enum Colors{
    white = '#fff',
    black = '#000'
}

//Basicamente ele serve para podermos criar um conjunto de chaves e valores e conseguimos usar uma chamada mais facil de encontrar o valor que desejamos 



//any
//Significa qualquer coisa (Ele pode ser qualquer coisa)Ela n é muito bem vista. Usar o any é a mesma coisa de n usar nada. Pq acaba tirando o poder do typescript, q é sua tipagem forte. 

let coisa: any;
coisa = true
coisa = 2
coisa = 'foo'
coisa = Boolean



//void
//É o mesmo que vazio. Não retornamos nada. É pra vc tipar funções onde vc sabe q n retorna nada. 

function logger(): void{
    console.log('foo')
}




//null | undefined 

//É quando a gente n sabe o valor. Não foi definido, é nulo, ou não foi definido ele é indefinido

type Bla = string | undefined //pode ser ou string, ou indefinido

//Mas n é aconselhados usá-los como tipos primitivos 

let variable: null //n faz sentido, geralmente é usado undefined






//never
//Nunca vai retornar, ele joga uma exeção, ele para tudo

function error(): never{
    throw new Error('error')
} 
//essa função n tem retorna nunca, ela só vai jogar o erro na tela




//object
//Tudo aquilo q n é nem s tring, array, boolean, number. O object é qualquer coisa q n seja desses tipos primitivos


let cart: object
//cart = true //vai dar erro pq ele n é um objeto, ele é um boolean

//cart = 'oi' //vai dar erro pq ele n é uma string, ele é um objeto

cart = {
    key: 'oi', //assim ele vai funcionar pq key é um objeto
    numb: 3333-4444, //phone tbm é um objeto com number dentro, assim como adm é um objeto com boolean dentro
    adm: true

}