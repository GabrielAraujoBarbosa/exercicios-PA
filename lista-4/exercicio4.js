const input = require("readline-sync");

let numero1 = Number( input.question("Digite o primeiro número: ") )
let numero2 = Number( input.question("Digite o segundo número: ") )
let numero3 = Number( input.question("Digite o terceiro número: ") )

let maiorNumero 
if (numero1 > numero2 && numero1 > numero3) { 
    maiorNumero = numero1
}
else if (numero2 > numero3) {
    maiorNumero = numero2
}
else {
    maiorNumero = numero3
}

console.log(`O maior número é ${maiorNumero}`)