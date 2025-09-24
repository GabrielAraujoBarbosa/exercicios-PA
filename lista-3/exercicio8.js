const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )

let numero2 = Number( input.question("Digite o segundo número: ") )

if (numero1 == numero2) {
    console.log(numero1)
    console.log(numero2)
}