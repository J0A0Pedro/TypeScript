"use strict";
//Oq são? São utilitarios para podermos trabalhar com tipos. Existe alguns momentos em q a gente quer fazer uma operação ou outro em cima dos próprios tipos, e os utilitarios vão servir pra isso. Vamos ver alguns mais comuns:
const todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
};
console.log(todo);
//todo.completed = true; //n pode ser editado (diretamente)
//usar um type utilities pra dizer q so queremos q o objeto seja criado apenas no momento da criação e dps n queremos que ele seja editável. Temos uma propriedade chamada readonly e passamos ela no nosso objeto, transformando tudo em readonly 
console.log(todo);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
;
// três pontos ... cria uma "cópia" do objeto referenciado
//usamos o Partial<Todo> pra dizer q pode ser uma parcial dele, fazendo com que n dê erro ao alterar apenas um dos três elementos do objeto no fieldsToUpdate. Podemos usar o ? pra dizer q é opcional no Todo la no topo, mas ele só pode ser opcional na function updateTodo, no objeto ele tem q ser obrigatório para n me entregar vazio, então usar ? não daria certo, por isso usamos Partial na function e ela faz o mesmo papel, fazendo com q eu possa alterar apenas um dos três sem me exigir todos eles.
//Partial torna opcional o fieldsToUpdate, não o Todo em si
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
//Estamos pegando apenas o titulo e a descrição usando o Pick 
const todo3 = {
    title: "Fechar Ghost of Tsushima",
    completed: false,
    //description:"Jogão" //n aceitou o descripton
};
console.log(todo3);
const todo4 = {
    title: "Prison Break",
    completed: true
};
console.log(todo4);
//Posso utilizar o Pick ou o Omit, mas quando devo usar um dos dois? 
//Se eu tiver muita informação que quero anular e a informação que quero pegar é menor, faz mais sentido usar o Pick pra pegar os poucos q quero. Se eu tenho muita informação, mas as informações que quero anular são menores do que as informações que quero deixar visíveis, eu uso o Omit pra omitir os poucos q eu não quero
//tenho muito pra omitir, mas pouco pra pegar, uso o Pick
//Tenho muito pra pegar, mas pouco pra omitir, uso o Omit
