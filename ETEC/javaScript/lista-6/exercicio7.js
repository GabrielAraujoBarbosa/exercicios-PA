const input = require("readline-sync");

let numero1, numero2

do {
    numero1 = input.questionInt("Digite o primeiro número: ")
} while (numero1 <= 10);

do {
    numero2 = input.questionInt("Digite o segundo número: ")
} while (numero2 >= 5);

console.log(numero1)
console.log(numero2)
