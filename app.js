alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log('O numero secreto é '+ numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto ) {
        alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);    
    } else {
        if (chute > numeroSecreto) {
            alert( `O numero secreto é menor que o ${chute}`);
        } else{
            alert(`O numero secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}