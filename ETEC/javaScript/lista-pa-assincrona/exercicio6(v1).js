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

    let nota1 = Number( input.question("Digite a 1º nota: ") );
    let nota2 = Number( input.question("Digite a 2º nota: ") );
    let nota3 = Number( input.question("Digite a 3º nota: ") );

    let mediaAluno = (nota1 + nota2 + nota3) / 3;

    console.log()
    console.log(`Média do aluno: ${mediaAluno.toFixed(2)}`)

    console.log("------------------------------------")
}