const input = require("readline-sync");

let numeroPositivo;
do {
    numeroPositivo = input.questionInt("Digite um número positivo: ")
    console.log()
} while (numeroPositivo <= 0);

// contagem regressiva até 0, inclusive.
console.log("CONTAGEM REGRESSIVA: ")
for (let i = numeroPositivo; i >= 0; i--) {
    console.log(i)
}