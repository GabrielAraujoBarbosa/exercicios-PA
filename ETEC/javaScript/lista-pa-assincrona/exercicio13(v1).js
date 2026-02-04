const input = require("readline-sync");

let numeroDigitado, somaNumerosDigitados = 0, contagemNumerosDigitados = 0;
let maiorNumeroDigitado = -999999999999, menorNumeroDigitado = 999999999999;

do { 
    numeroDigitado = Number( input.question("Digite um número: ") )
    contagemNumerosDigitados++
    
    somaNumerosDigitados += numeroDigitado

    // análise do númeroAtual digitado com o já considerado maior
    if (numeroDigitado > maiorNumeroDigitado) {
        maiorNumeroDigitado = numeroDigitado
    }

    // análise do númeroAtual digitado com o já considerado menor
    if (numeroDigitado < menorNumeroDigitado && numeroDigitado != 0) {
        menorNumeroDigitado = numeroDigitado
    }  

} while (numeroDigitado != 0);

contagemNumerosDigitados--
let mediaNumeros = (somaNumerosDigitados / contagemNumerosDigitados).toFixed(2)

console.log()
console.log(`-------------------------------------------`)
console.log(`Quantidade de números digitados: ${contagemNumerosDigitados}`)
console.log(`Média dos números: ${mediaNumeros}`)
console.log(`O maior valor: ${maiorNumeroDigitado}`)
console.log(`O menor valor: ${menorNumeroDigitado}`)
