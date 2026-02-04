const input = require("readline-sync");

let quantidadeAlunos;
do {
    quantidadeAlunos = input.questionInt("Digite a quantidade de alunos: ")
    console.log()
} while(quantidadeAlunos < 1);


console.log("------------------------------------")
for (let i = 1; i <= quantidadeAlunos; i++) {

    console.log(`| ${i}º Aluno |`)
    console.log()

    let notas = 0; 
    for (let j = 1; j <= 3; j++) {
        notas += Number( input.question(`Digite a ${j}º nota: `) );
    }

    let mediaAluno = notas / 3;

    console.log()
    console.log(`Média do aluno: ${mediaAluno.toFixed(2)}`)

    console.log("------------------------------------")
}