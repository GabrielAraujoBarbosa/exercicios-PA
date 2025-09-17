const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )

let numero2 = Number( input.question("Digite o segundo número: ") )

let numero3 = Number( input.question("Digite o terceiro número: ") )

let somaNumeros = numero1 + numero2 + numero3

if (somaNumeros > 20) {
    console.log(somaNumeros)
}