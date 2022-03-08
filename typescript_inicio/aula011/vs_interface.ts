
//Interface

//definição:

interface Game {
    title: string;
};

interface DLC {
    //extra: string;
}


//interseção  | extend 

interface GameCollection extends Game, DLC { }

//implements 

//class CreateGame implements GameCollection { }

//declarar função

interface getSimilars {
    (title: string): void;
}



// =============================== DIFERENÇAS ================================ //


//interface ID extends number { }
//n consegue declarar tipos primitivos


interface Tuple {
    0: number;
    1: number;
}

[1, 2, 3, 4, "ssas"] as Tuple; //n consegue declarar tupla


//pode ter multiplas declarações e ele une de mesmo nome

interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}


const $: JQuery = {
    a: "bla",
    b: "foo",
};


//vantagem: quando estiver criando bibliotecas (libs) dê preferência para Interfaces, porque são mais extensíveis!

//criando objetos/classes (POO)

