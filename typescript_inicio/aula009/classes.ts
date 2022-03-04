abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    
    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    level: number;


    constructor (name: string, age: number, nickname: string,  level: number){

       super(name, age); //para pegar a classe superior colocamos oq queremos dentro do super(), o resto pode ser pego com this mesmo pq esta aqui

       this.nickname = nickname;
       this.level = level;
    }

    get getLevel(){
        console.log('--------GET--------')
        return this.level
    }

    set setLevel(level: number){
        this.level = level;
    }


    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level} `);
    }//estamos conseguindo chamar o nickname aquii sem problema nenhum
}




// const will = new UserAccount ('Roberto', 18);
// console.log(will);
// //console.log(will.age); //só pode ser acessado dentro do UserAccount ou da sub classe  


// will.logDetails();


const john = new CharAccount('John', 45, 'DarkShadowRosa', 100);

//john.nickname = 'Mariana' //n consigo editar por causa do private

//console.log(john.nickname) //erro pq nickname esta com private que torna impossível chamar ou editar ela fora da classe



//john.level = 23 //n consigo editar por causa do readonly

console.log(john.level); //mas consigo chamar ela fora da classe, diferente de private q não era possivel chamar e nem editar, readonly só n é possível editar.

//john.age = 12 //erro por causa do protected 

//console.log(john.age) //não consigo chamar age fora da classe dela ou da qual ela foi extendida

console.log(john);


john.logDetails(); //ele tbm tem o método pq o método logDetails está dentro de UserAccount, assim herdamos suas propriedades


john.logCharDetails();


john.setLevel = 999 //usamos o setLevel para modificar o level

console.log(john.getLevel); //retornou 100 Assim é como acessamos oq o get nos retorna


console.log(john);







