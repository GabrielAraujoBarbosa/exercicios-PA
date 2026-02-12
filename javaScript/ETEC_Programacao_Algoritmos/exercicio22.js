const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )

let numero2 = Number( input.question("Digite o segundo número: ") )

if (numero1 < numero2) {
    numero1 += 5
} else {
    numero2 += 5
}

if (numero1 > numero2) {
    console.log(numero1)
} else {
    console.log(numero2)
}