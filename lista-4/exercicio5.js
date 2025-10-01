const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )
let numero3 = Number( input.question("Digite o segundo número: ") )

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1)
}
else if (numero2 > numero3) {
    console.log(numero2)
}
else {
    console.log(numero3)
}