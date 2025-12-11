function verificarNomeExistenteArray(arrayNomes, nomeBuscado) {
    let resultadoBusca = arrayNomes.includes(nomeBuscado)
    return resultadoBusca == true ? `${nomeBuscado} está no array de nomes!` : `${nomeBuscado} não existe no array.`
}

function main () {
    const arrayNomes = [
        "Ana", 
        "Bruno", 
        "Carlos", 
        "Daniela", 
        "Eduardo", 
        "Fernanda", 
        "Gabriel", 
        "Helena", 
        "Igor", 
        "Juliana"
    ];  
  
    let nome = "Leticia";

    let mensagemResultado = verificarNomeExistenteArray(arrayNomes, nome)
    console.log(mensagemResultado)
}

// Execução
main()