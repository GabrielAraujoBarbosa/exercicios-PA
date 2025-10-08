const input = require("readline-sync");

console.log("   *** Intervalo entre número digitados ***")
console.log()

let numero1 = input.questionInt("Digite o primeiro número: ")
let numero2 = input.questionInt("Digite o segundo número: ")

// Analisa o numero1 com o numero2
switch (numero1) {
    // Caso números iguais
    case numero2:
        console.log(`Números são iguais. Não existe intervalo numa igualdade de números!`)
        break;
    // Caso números sejam vizinhos; consecutivos (assim, não tendo inteiros entre eles)
    case (numero2 - 1):
    case (numero2 + 1):
        console.log(`Não existem números inteiros entre ${numero1} e ${numero2}!`)
        break;

    // Caso nenhuma das opções acima foram executadas. Assim tendo um intervalo válido
    default:
        // Mostre o intervalo...

        if (numero1 > numero2) {
            // Sendo numero1 maior que numero2...
            for (let i = numero1 - 1; i > numero2; i--) {
                // Em ordem decrescente
                console.log(i)
            }
        } else {
            // Sendo numero1 menor que numero2
            for (let i = numero1 + 1; i < numero2; i++) {
                // Em ordem crescente
                console.log(i)
            }
        }  
}