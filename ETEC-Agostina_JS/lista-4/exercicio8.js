const input = require("readline-sync");

let numero = Number( input.question("Digite um número: ") )

if (numero > 10) {
    numero += 5
} 
else {
    numero += 20
}

if (numero > 25) {
    console.log(numero)
}