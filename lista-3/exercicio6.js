const input = require("readline-sync");

let numero = Number( input.question("Digite um número: ") )
numero *= 3

if (numero > 15) {
    console.log(numero)
}
