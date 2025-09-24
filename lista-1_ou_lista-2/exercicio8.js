const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )
let numero3 = Number( input.question("Digite o terceiro número: ") )

numero1 += 10, numero2 -= 5, numero3 *= 2

console.log(numero1)
console.log(numero2)
console.log(numero3)