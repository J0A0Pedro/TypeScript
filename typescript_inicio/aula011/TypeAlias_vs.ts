
//Type Aliases

//definição:

type GameT = {
    title: string;
};

type DLCT = {
    extra: string;
};


//intersection 

type GameCollectionT = Game & DLCT & { content: boolean }
//posso passar diretamente mais um objeto

//implements

class CreateGameT implements GameCollection { }


//declarar função

type getSimilarsT = (title: string) => void;


// =============================== DIFERENÇAS ================================ //


//permite declarar primitivos

type IDT = string | number;


//pode declarar tuplas normalmente

type TupleT = [number, number];

[1, 2] as TupleT;

//Apenas uma declaração por escopo

type JQueryT = { a: string };
//type JQueryT = { b: string }; n consigo declarar outra com o mesmo nome



// mais recomendado:
// na maioria das vezes

// React - Props 

// CONSISTÊNCIA!

//os dois são similares, mantenha a consistência do projeto




