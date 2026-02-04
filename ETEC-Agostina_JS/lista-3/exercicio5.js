const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )

if (numero1 + numero2  < 20) {
    console.log(numero1 * 10)
    console.log(numero2 * 10)
}