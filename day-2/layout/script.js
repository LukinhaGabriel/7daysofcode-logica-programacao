const $name = document.querySelector("#name");
const $age = document.querySelector("#age"); 
const $language = document.querySelector("#language");




document.querySelector("form").addEventListener("submit", () => {
  alert(`Olá ${$name.value}, você tem ${$age.value} anos e já esta aprendendo ${$language.value}`);
  let option = prompt(`Você gosta de estudar ${$language}? | reponda 1 para sim e 2 para não`);
  if(option == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.", option);
  } else{
    if (option == 2) {
      alert("Ahh que pena... Já tentou aprender outras linguagens.");
    } else{
      alert("Resposta Inválida responda com 1 ou 2");
    }
  } 
})

