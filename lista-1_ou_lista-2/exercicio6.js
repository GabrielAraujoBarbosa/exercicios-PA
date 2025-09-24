const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )

numero1 -= 3, numero2 += 2

let resultado = (numero1 + numero2) - 1
console.log(resultado)


