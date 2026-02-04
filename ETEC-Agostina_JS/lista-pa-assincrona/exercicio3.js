const input = require("readline-sync");

let somaTotal = 0;
for (let i = 1; i <= 5; i++) {
    let numero = Number( input.question(`Digite o ${i}º número: `) )
    somaTotal += numero
}

console.log(`Soma Total: ${somaTotal}`)