alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);

let chute;
let tentativas = 1; 

// Enquanto o chute não for igual ao numero 
while (chute != numeroSecreto){
    chute = prompt("Advinhe o número secreto: de 1 a 10");

    // se chute for igual ao numero secreto
    if (chute = numeroSecreto) {
        alert(`Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {        
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        
        // numero de tentativas somadas
        tentativas++; 
    }
}