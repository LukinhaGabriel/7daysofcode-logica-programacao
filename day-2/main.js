const $name = "Lucas Gabriel";
const $age = 23; 
const $language = "Javascript";
const $option = 1;

//const $

console.log(`Olá ${$name}, você tem ${$age} anos e já esta aprendendo ${$language}`);

console.log(`Você gosta de estudar ${$language}?`)
switch($option){
  case 1:
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
    break
  case 2:
    console.log("Ahh que pena... Já tentou aprender outras linguagens.");
    break
  default:
    console.log("Resposta Inválida")

}


