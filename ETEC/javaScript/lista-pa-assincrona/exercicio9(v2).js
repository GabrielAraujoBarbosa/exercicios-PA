const input = require("readline-sync");

let palavra = input.question("Digite uma palavra: ")

let quantidadeVogais = obterQuantidadeVogaisPalavra( palavra.toLowerCase() );

console.log()
console.log(`Quantidade de vogais: ${quantidadeVogais}`)

/////// FAZER COM O FOR OF ENTENDER   FOR OF E FOR IN        AAAAAAAAAAAAAAAAAAAAAAA ///////


function analisarSeCaractereIgualVogal(caractere) {
    if (caractere == "a" || caractere == "e" || caractere == "i" || caractere == "o" || caractere == "u") {
        return true;
    }
    return false;
}
function obterQuantidadeVogaisPalavra (palavra = "") {
    let quantidadeVogais = 0;
    
    // Laço que percorre por cada caractere da palavra
    for (let caractere of palavra) {

        // Análise do caractere (através de função)
        if ( analisarSeCaractereIgualVogal(caractere) ) {
            quantidadeVogais++
        } 
    }

    return quantidadeVogais;
}


