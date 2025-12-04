// Objeto Aluno
let alunoAlessandro = {
    nome: "Alessandro Vitorio",
    idade: 30,
    curso: "Análise e Desenvolvimento de Sistemas"
}

// Função que trata o Objeto (gerando um retorno)
function apresentarAluno (objetoAluno) {
    return `Olá, pessoal! Meu nome é ${objetoAluno.nome} e tenho ${objetoAluno.idade} anos. Sou do curso de ${objetoAluno.curso}.`
}

// Mostrando retorno da função
console.log( apresentarAluno(alunoAlessandro) )