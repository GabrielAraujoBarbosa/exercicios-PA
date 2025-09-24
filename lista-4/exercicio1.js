const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )

let numero2 = Number( input.question("Digite o segundo número: ") )

let menorNumero
if (numero1 < numero2) {
    menorNumero = numero1
} else {
    menorNumero = numero2
}

console.log(`O menor número é ${menorNumero}`)