const input = require("readline-sync");

// Obtendo o número da tabuada
let fator1 = input.questionInt("Digite um número: ")

// Obtendo o intervalo do segundo fator da multiplicação - 1 até 10
for (let fator2 = 1; fator2 <= 10; fator2++) {
    console.log(`${fator1} * ${fator2} = ${fator1 * fator2}`)
}