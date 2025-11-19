const input = require("readline-sync");

let senha = "1234"

let tentativaDigitada = input.question("Digite uma senha: ")

while (tentativaDigitada != senha) {
    
    console.log("Acesso negado!")
    tentativaDigitada = input.question("Digite uma senha: ")
}

console.log("Acesso Permitido!")