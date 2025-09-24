const input = require("readline-sync");

let numero = Number( input.question("Digite um número: ") )
numero = numero + (numero - 3)

console.log(numero)