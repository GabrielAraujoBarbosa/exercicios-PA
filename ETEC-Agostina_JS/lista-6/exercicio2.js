const input = require("readline-sync");

console.log("   *** Intervalo entre número digitado e 20 ***")
console.log()

// Entrada de inteiro
let numero = input.questionInt("Digite o número para o intervalo: ")

// Analisa o número digitado
switch (numero) {
    // Caso numero igual a 20
    case 20:
        console.log(`Número é igual a 20. Não existe intervalo numa igualdade de números!`)
        break;
    // Caso numero igual a 19 ou 21
    case 19:
    case 21:
        console.log(`Não existem números inteiros entre ${numero} e 20!`)
        break;
    // Caso nenhuma das opções acima foram executadas. Assim sendo um número válido para ter intervalo
    default:
        // Mostre o intervalo...

        if (numero > 20) {
            // Sendo numero maior que 20, até 20...
            for (let i = numero - 1; i > 20; i--) {
                // Do primeiro valor abaixo de numero até (20 + 1); ordem decrescente
                console.log(i)
            }
        } else {
            // Sendo numero menor que 20, até 20...
            for (let i = numero + 1; i < 20; i++) {
                // Do primeiro valor acima de numero até (20 - 1); ordem crescente
                console.log(i)
            }
        }  
}