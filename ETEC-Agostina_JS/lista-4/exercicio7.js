const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )
let numero3 = Number( input.question("Digite o terceiro número: ") )

console.log()

if (numero1 == numero2 && numero2 == numero3) {
    console.log("Os 3 números são iguais!")
}   
else {
    // Senão, Mostre em ordem crescente
    
    // O numero1 é o menor de todos ?
    if (numero1 < numero2 && numero1 < numero3) {
        console.log(numero1);

        // O numero2 é o segundo menor ? 
        if (numero2 < numero3) {
            console.log(numero2)
            console.log(numero3)
        }
        // Senão, o segundo menor é o numero3 !
        else {
            console.log(numero3)
            console.log(numero2)
        
        }
        
    }
    // O numero2 é o menor de todos ? (sem usar o numero1 porque já sabe-se que o menor só pode ser o 2 ou o 3)
    else if (numero2 < numero3) {
        console.log(numero2)

        // O numero1 é o segundo menor ?
        if (numero1 < numero3) {
            console.log(numero1)
            console.log(numero3)
        }
        // Senão, o segundo menor é o numero3 !
        else {
            console.log(numero3)
            console.log(numero1)
        }
    }
    // Senão, o numero3 é o menor de todos !
    else {
        console.log(numero3)

        // o numero1 é o segundo menor ?
        if (numero1 < numero2) {
            console.log(numero1)
            console.log(numero2)
        }
        // Senão, o segundo menor é o numero2 !
        else {
            console.log(numero2)
            console.log(numero1)
        }
    }
    
}