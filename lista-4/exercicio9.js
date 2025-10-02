const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )
let numero3 = Number( input.question("Digite o terceiro número: ") )
let numero4 = Number( input.question("Digite o quarto número: ") )

let somaPrimeirosNumeros = numero1 + numero2
let subtracaoUltimosNumeros = numero3 - numero4 

if (somaPrimeirosNumeros + subtracaoUltimosNumeros > 10) {
    console.log("Resultado maior que 10")
}
else {
    console.log("Resultado menor ou igual a 10")
}