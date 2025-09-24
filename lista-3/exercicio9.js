const input = require("readline-sync");

let numero = Number( input.question("Digite um número: ") )

if (numero / 2 > 20) {
    console.log(numero / 2)
}