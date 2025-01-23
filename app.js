alert('Boas vindas ao jogo do número secreto');
let numeroMaximo =100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('O numero secreto é '+ numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto ) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert( `O numero secreto é menor que o ${chute}`);
        } else{
            alert(`O numero secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}
// operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} tentativas`);