alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log('O numero secreto é '+ numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');
console.log ('O chute escolhido pelo jogador foi: '+ chute);

// Se o chute for igual ao numero secreto 
if (chute == numeroSecreto ) {
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}`);    
} else{ //Se o chute for diferente
    alert('Voce errou )`:')
}