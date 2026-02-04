const input = require("readline-sync");

let numeroPositivo;
do {
    numeroPositivo = input.questionInt("Digite um número positivo: ")
    console.log()
} while (numeroPositivo <= 0);
    

if (numeroPositivo == 1 || numeroPositivo == 2) {
    // Se for 1
    if (numeroPositivo == 1) {
        console.log(`Não existe números pares ou ímpares até chegar ao ${numeroPositivo}`)
    }
    // Se for 2 
    else {
        console.log(`Não existe pares, apenas o número ímpar 1 até chegar ao ${numeroPositivo}.`)
    }
} else {

    // amostragem dos números pares até numeroPositivo
    console.log("NÚMEROS PARES:")
    for (let i = 2; i < numeroPositivo; i += 2) {
        console.log(i)
    }        
    
    // Separação
    console.log()
    
    console.log("NÚMEROS ÍMPARES:")
    // amostragem dos número ímpares até numeroPositivo
    for (let i = 1; i < numeroPositivo; i += 2) {
        console.log(i)
    }
}