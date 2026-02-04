const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )
let numero3 = Number( input.question("Digite o terceiro número: ") )

if (numero1 == numero2 && numero2 == numero3) {
    console.log("Os 3 números são iguais!")
}   
else {
    // Senão, Obtêm o menor número 
    let menorNumero
    
    // O numero1 é o menor de todos ?
    if (numero1 < numero2 && numero1 < numero3) {
        menorNumero = numero1
    }
    // Senão, o numero2 é o menor ?
    else if (numero2 < numero3) {
        menorNumero = numero2
    }
    else {
        // Senão, numero3 é o menor
        menorNumero = numero3
    }
    
    console.log(`O menor número é ${menorNumero}`)
}