const input = require("readline-sync");

let numeroDigitado;
do {
    numeroDigitado = input.questionInt("Digite um número: ")
} while (numeroDigitado <= 20);

for (let i = numeroDigitado - 1; i > 1; i--) {
    console.log(i)
}