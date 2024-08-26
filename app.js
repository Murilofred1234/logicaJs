alert("BOAS VINDAS AO JOGO DO NÚMERO SECRETO")

let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)

let chute;
let contador = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)

    if(numeroSecreto == chute){
        break;
        
    }else{
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}` );
            
        }else{
            alert(`O número secreto é menor que ${chute}`);
            
        }
    }
}

let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
alert (`Você descobriu o número secreto: ${numeroSecreto} com ${contador} ${palavraTentativa}`);


