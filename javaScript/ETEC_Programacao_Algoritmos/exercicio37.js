const input = require("readline-sync");

let numeroDigitado

do {
    numeroDigitado = input.questionInt("Digite um número: ")
} while (numeroDigitado >= 10);

console.log(numeroDigitado)