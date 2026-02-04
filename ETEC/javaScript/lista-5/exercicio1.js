const input = require("readline-sync");

let numeroDiaSemana = Number(input.question("Digite um número que representa dia da semana: "))

switch (numeroDiaSemana) {
    case 1:
        console.log("domingo")
        break;
    case 2:
        console.log("segunda-feira")
        break;
    case 3:
        console.log("terça-feira")
        break;
    case 4:
        console.log("quarta-feira")
        break;
    case 5:
        console.log("quinta-feira")
        break;
    case 6:
        console.log("sexta-feira")
        break;
    case 7:
        console.log("sábado")
        break;
    default:
        console.log(`Número ${numeroDiaSemana} não representa um dia da semana`)
}