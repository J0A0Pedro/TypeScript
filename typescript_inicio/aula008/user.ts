//accountInfo
//charInfo
//PlayerInfo


type AccountInfo = {
    id: number | string;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: 'Joao',
    email: 'abc@gmail.com'
}

//Digamos que queremos que o email n seja obrigatório, mas sim opcional. Colocamos um ponto de interrogação na frente do nosso tipo ? E esse ponto de interrogação torna opcional adicionar ou não um email.




type CharInfo = {
    nickname: string;
    level: number;
}


const char: CharInfo = {
    nickname: 'Pedro',
    level: 100
}



type PlayerInfo = AccountInfo & CharInfo //vai juntar os dois tipos (intersection): 

const player: PlayerInfo = {
    id: '123', 
    name: 'Joao',
    nickname: 'Pedro',
    level: 100,
    //email: 'abc@gmail.com'
}

//n precisamos passar na mesma ordem, pq a estrutura e os tipos são os mesmos