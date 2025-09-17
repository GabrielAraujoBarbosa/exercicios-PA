const input = require("readline-sync");

let numero = Number( input.question("Digite um número: ") )

numero -= 10

if (numero > 3) {
    console.log(numero)
}
