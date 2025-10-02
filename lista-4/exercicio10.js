const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )

console.log()

if (numero1 == numero2) {
    console.log("Números iguais");
}
else {

    if (numero1 < numero2) {
        console.log("Numero2 > Numero1")
        numero1 *= 10
        numero2 /= 2
    }
    else {
        console.log("Numero1 > Numero2")
        numero2 *= 10
        numero1 /= 2
    }

    let resultado = numero1 + numero2
    
    if (resultado % 2 == 0) {
        console.log("Resultado é Par")
    }
    else {
        console.log("Resultado é Ímpar")
    }
}
