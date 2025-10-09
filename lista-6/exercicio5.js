const input = require("readline-sync");

let numero1 = input.questionInt("Digite o primeiro número: ")
let numero2 = input.questionInt("Digite o segundo número: ")
let numero3 = input.questionInt("Digite o terceiro número: ")

console.log()

// Entre os 3 números, 2 deles são iguais ?
if (numero1 == numero2 || numero2 == numero3 || numero3 == numero1) {
    console.log("Inválido! Foi digitado 2 números iguais entre os 3 números.")
}
// Senão...
else {
// 1º - Obtêm os 2 números maiores (primeiroMaior e segundoMaior)
//

    let primeiroNumeroMaior, segundoNumeroMaior;
    
    // numero1 é o maior de todos ?
    if (numero1 > numero2 && numero1 > numero3) {

        primeiroNumeroMaior = numero1

        // numero2 é o segundo maior ? 
        if (numero2 > numero3) {
            segundoNumeroMaior = numero2
        }
        else {
            // numero3 é o segundo maior !
            segundoNumeroMaior = numero3
        }
    } 
    // Senão...
    // numero2 é o maior de todos ? (já que não é o numero1)
    else  if (numero2 > numero3) {

        primeiroNumeroMaior = numero2

        // numero1 é o segundo maior ? 
        if (numero1 > numero3) {
            segundoNumeroMaior = numero1
        }
        else {
            // numero3 é o segundo maior !
            segundoNumeroMaior = numero3
        }
    }
    // Senão...
    else {
        // Ultima opção, numero3 é o maior de todos ! (já que não é nem o numero1 e o numero2)
        
        primeiroNumeroMaior = numero3

        // numero1 é o segundo maior ?
        if (numero1 > numero2) {
            segundoNumeroMaior = numero1
        }
        else {
            // numero2 é segundo maior !
            segundoNumeroMaior = numero2
        }
    }

    console.log(`. 1º Maior: ${primeiroNumeroMaior}`)
    console.log(`. 2º Maior: ${segundoNumeroMaior}`)
    console.log()

    
// 2º - Analisa se existem números entre os 2 maiores
//

    switch(primeiroNumeroMaior) {
        // Caso números maiores sejam vizinhos; consecutivos (assim, não tendo inteiros entre eles); (1ºMaior - 1) = 2ºMaior
        case (segundoNumeroMaior + 1):
            console.log(`Não existem números inteiros entre ${segundoNumeroMaior} e ${primeiroNumeroMaior}!`)
            break;
        // Caso nenhuma das opções acima foram executadas. Assim tendo um intervalo válido
        default:
            // Mostre o intervalo...
            for (let i = segundoNumeroMaior + 1; i < primeiroNumeroMaior; i++) {
                // Em ordem crescente
                console.log(i)
            }
    }


}
    
    
