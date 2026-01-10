const pessoas = [
  // Pessoas Maiores de 18 anos
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 19 },
  { nome: "Carla", idade: 22 },
  { nome: "Diego", idade: 35 },
  
  // Pessoas Não Maiores de 18 anos
  { nome: "Alessandro", idade: 10},
  { nome: "Yuri", idade: 18},
  { nome: "Rebeca", idade: 6}
];


function obterPessoasMaioresQue18Anos (arrayPessoas) {
    return arrayPessoas.filter( pessoa => pessoa.idade > 18)
}

function mostrarPessoasMaioresQue18Anos (arrayPessoas) {
    const pessoasMaiores18 = obterPessoasMaioresQue18Anos(arrayPessoas)

    console.log(`MAIORES QUE 18 ANOS:`)
    pessoasMaiores18.forEach( pessoa => {
        console.log(`. ${pessoa.nome} tem ${pessoa.idade} anos`)
    });
}


// Execução
mostrarPessoasMaioresQue18Anos(pessoas)