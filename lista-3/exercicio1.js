const input = require("readline-sync");

let numero = Number( input.question("Digite um número: ") )

numero += 5

if (numero > 5) {
    console.log(numero)
}