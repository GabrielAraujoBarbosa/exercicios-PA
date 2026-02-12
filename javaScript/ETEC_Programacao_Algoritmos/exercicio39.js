const input = require("readline-sync");

let numeroDigitado;
do {
    numeroDigitado = input.questionInt("Digite um número: ")
} while (numeroDigitado >= 5);

let primeiroPar;
if ( (numeroDigitado + 1) % 2 == 0) {
    primeiroPar = numeroDigitado + 1
}
else {
    primeiroPar = numeroDigitado + 2
}

numeroFinal = 20;
console.log(`
Numeros Entre ${numeroDigitado} e ${numeroFinal} são:
`);

for (let i = primeiroPar; i < numeroFinal; i += 2) {
    console.log(i);
}