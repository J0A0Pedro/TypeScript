// @Component
// @Selector
// @useState("dasdas")

// Class decorator 
// Property decorator
// Method decorator 
// Parameter decorator 
// Acessor decorator



//Decorators é uma declaração sempre iniciada com @ e um nome em seguida que pode ser só ele ou tbm pode conter algum parâmetro dentro, lembrando uma function

//O decorator é uma declaração/notação que pode ser anexada em uma classe/propriedade/método/parâmetro...

//Ele vai trabalhar em cima dessas partes anotadas pra que consigamos adicionar coisas novas e também eestará "vigiando" essas marcações para que ele possa adicionar um elemento novo ou fazer alguma validação etc...


//NA PRÁTICA:

// //FACTORY
// //A gente vai criar uma função que vai retornar a criação do nosso decorator
// function Logger( prefix: number ){
//     return ( target: unknown) => {
//         console.log(`${ prefix } - ${ target }`)
//     };
// }
// @Logger(1234)
// class Foo{}




// //outro exemplo: CLASS DECORATOR 

// function setAPIVersion( apiVersion: string ){
//     return (constructor: any) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }

// //decorator pra anotar a versão da API
// @setAPIVersion("2.0.0")
// class API {}

// console.log( new API() );


// //A gente consegue criar uma propriedade pra dentro da nossa classe de forma mais simplificada 






// //exemplo com PROPERTY DECORATOR:

// //Enquanto o anterior nós trabalhamos em cima de uma classe, nesse vamos trabalhar em cima de uma propriedade 

// //oq podemos fazer com property decorator é anotar uma propriedade da nossa classe pra alguma coisa, exemplo eu quero fazer uma validação


// function minLength(length: number){
//     return (target: any, key: string) => {
        
//         let val = target[key]

//         const getter = () => val;

//         const setter = (value: string) => {
//             if(value.length < length) {
//                 console.log(`Error: Você não pode criar ${key} com tamanho menor que ${length}`)
//             }
//             else{
//                 val = value
//             }
//         } 

//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter
//         })
//     }
// }

// class Movie { 
//     //validação - se for menor que 5 -> error
//     @minLength(5)
//     title: string;

//     constructor (t: string) {
//         this.title = t
//     }
// }

// const movie = new Movie("The Boy and The Beast");
// console.log(movie.title, movie);







//METHOD DECORATOR 

//É um decorator q passamos em cima de um método. E ele vai rodar toda vez q o metodo for chamado, diferente da classe q usa em runtime, ou seja, no momento q a classe for criada ele já começou a rodar 


function delay(ms: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (... args: any) {
            console.log(`Esperando ${ms}...`);
            setTimeout( () => {
                originalMethod.apply(this, args)
            }, ms);

            return descriptor;
        }
    }
}
//PropertyDescriptor descreve o método/propriedade ali


class Greeter {
    greeting: string;

    constructor (g: string) {
        this.greeting = g
    }
    //esperar um tempo e ai vai rodar o método (ms)
    @delay(3000)
    greet(){
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoinha = new Greeter ("pessoinha!")
pessoinha.greet();