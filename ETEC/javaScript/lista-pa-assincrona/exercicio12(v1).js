const input = require("readline-sync");

let numeroDigitado = input.questionInt("Digite um número: ")

verificarNumeroPrimo(numeroDigitado)

function verificarNumeroPrimo(numero) {

    let mensagemFinal;

    if (numero > 1) {
        let numeroPrimo = true
        
        for (let divisores = numero - 1; divisores > 1; divisores--) {
            if (numero % divisores == 0) {
                numeroPrimo = false
            }
        }
    
        if (numeroPrimo) {
            mensagemFinal = `Número ${numeroDigitado} é primo. Só é divisivel por 1 e ${numeroDigitado} (ele mesmo).`
        } else {
            mensagemFinal = `Número ${numeroDigitado} não é primo.`
        }
    
    } else {
        let mensagemErro = numeroDigitado < 0 ? ` e não é natural. Logo é impossível verificar se é primo.` : `. Logo não pode ser primo!`
    
        mensagemFinal = `Número não é maior que 1${mensagemErro}`
    }

    console.log(mensagemFinal)
}