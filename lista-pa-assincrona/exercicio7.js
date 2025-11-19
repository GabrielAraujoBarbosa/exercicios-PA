const input = require("readline-sync");

console.log("LISTA DE NÚMEROS")
console.log()

let numeros = [];
do {
    numeros.push( input.questionInt("Digite um número: ") )
    console.log()
} while ( numeros[numeros.length - 1] != 0);


console.log("-----------------------")

console.log(`Número ${numeros[numeros.length - 1]} excluído da lista!`)
numeros.pop()

console.log("-----------------------")

descobrirMaiorMenorNumero(numeros)


function descobrirMaiorMenorNumero(arrayNumeros = []) {

    // Descobrindo o maior e menor número da lista (considerando, inicialmente, o menor e maior como o índice 0)
    let maiorNumero = arrayNumeros[0];
    let menorNumero = arrayNumeros[0];  

    for (let i = 1; i < arrayNumeros.length; i++) {
        
        // Analisar outros índices para obter maiorNumero
        if (arrayNumeros[i] > maiorNumero) {
            maiorNumero = arrayNumeros[i]
        }

        // Analisar outros índices para obter menorNumero
        if (arrayNumeros[i] < menorNumero) {
            menorNumero = arrayNumeros[i]
        }  
    }

    console.log(`Menor número da lista: ${menorNumero}`)
    console.log(`Maior número da lista: ${maiorNumero}`)
}