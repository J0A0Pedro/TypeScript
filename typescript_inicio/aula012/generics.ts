//vamos ver pedaço por pedaço do generic
//pra que serve o generic?  Reutilizar o código, precisamos tornar mais génerico, precisamos fazer com que  ele aceite diferentes tipos de entrada, de argumentos. E o ts define tudo fortemente, ent oq era pra ser, em tese, mais generico, acaba n sendo. 
//Por isso temos o generic, pra gente conseguir, dentro de uma linguagem tipada, ainda ter uma flexibilidade e aceitar diferentes tipos de entrada.



//Algumas letras padrões:

// S -> State
// T -> Type
// K -> Key
// V -> Value
// E -> Element


//Esse simbolo vai representar para sua função q essa função vai poder trabalhar com alguma coisa do tipo S. E oq esse tipo S representa?


type numOrStr = number | string //podemos definir o tipo do S tbm usando type aliases sem problema

function useState <S extends numOrStr = string >() {
                        /*tipo do S*/ /*default dele é string*/
    let state: S;

    function getState() {
        return state
    }

    function setState(newState: S){
        state = newState
    }

    return { getState, setState };
}


const newState = useState/*<string> n precisamos mais dela já q foi definido string como padrão lá no começo*/(); 

//para n ficarmos escrevendo isso como padrão, podemos usar igual mais o tipo que você quer como padrão.
//Exemplo:  < S extends number | string = string >




// newState.setState(false); //é uma string
// console.log(newState.getState());

newState.setState("foo"); //é uma string
console.log(newState.getState());

// newState.setState(123); //dê erro. Vai dar erro pq vc ja definiu que é uma string. Mesmo q o S aceite dois tipos diferentes no começo, isso só acontece até você definir o tipo "final", q nesse caso foi string
// console.log(newState.getState());

//O S foi flexível, conseguimos passar número e string, mas quando nós definimos, não podemos mudar mais e ele só vai aceitar o tipo definido


newState.setState("bla");
console.log(newState.getState());


//A gente quer q ele funcione com string e dê erro com numero, então temos q definir oq é esse tipo S

//tipo unknow de inicio pode ser qualquer coisa, mas no momento q vc definir, ele vai passar a aceitar só aquilo que você definiu. Para vc colocar os tipos no S, vc usa < S extends number | string > e ele vai aceitar esses dois valores apenas