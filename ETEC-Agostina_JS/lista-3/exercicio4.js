const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
numero1 += 5

let numero2 = Number( input.question("Digite o segundo número: ") )
numero2 += 5

let numero3 = Number( input.question("Digite o terceiro número: ") )
numero3 += 5

if (numero1 > 10) {
    console.log(numero1)
}

if (numero2 > 10) {
    console.log(numero2)
}

if (numero3 > 10) {
    console.log(numero3)
}


