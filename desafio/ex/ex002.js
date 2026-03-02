// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
console.log("Funcionando")


let numero = prompt("Digite um numero para verificar:")

if (numero > 0){
    console.log("seu número é positivo +.")
} else if(numero < 0){
    console.log("Seu número é negativo")
} else if( numero == 0){
    console.log("O 0 é considerado um número neutro nem positivo nem negativo")
}else{
    console.log("Caractere inválido, só é possível fazer a leitura se vc colocar um número")
}
