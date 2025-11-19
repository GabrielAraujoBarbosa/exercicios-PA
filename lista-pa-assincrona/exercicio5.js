const input = require("readline-sync");

fator1 = input.questionInt("Digite um número: ")

console.log()

console.log(`Tabuada do ${fator1}:`)
for (let fator2 = 1; fator2 <= 10; fator2++) {
    console.log(`${fator1} x ${fator2} = ${fator1 * fator2}`) 
} 