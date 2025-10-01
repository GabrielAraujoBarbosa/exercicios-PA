const input = require("readline-sync");

let numero = Number( input.question("Digite um número: ") )

if (numero > 10) {
    console.log("Número maior que 10")
} else {
    console.log("Número menor ou igual a 10")
}