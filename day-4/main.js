alert("tente acertar o número");
let $chosenNumber = prompt("Escolha um número entre 0 e 10: ");
let randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);

if(randomNumber != $chosenNumber){
  alert("Você errou vou te dar mais 2 tentativas para acertar");
  for(let index = 1; index < 3; index++){
    $chosenNumber = prompt(`Tente Novamente ${index} tentativas`);
    if(randomNumber == $chosenNumber){
      break;
    }
  }
}

if ($chosenNumber == randomNumber){
  alert(`Parabéns! Você acertou o número`);
}
else{
  alert(`Você errou o número era ${randomNumber}`);
}

