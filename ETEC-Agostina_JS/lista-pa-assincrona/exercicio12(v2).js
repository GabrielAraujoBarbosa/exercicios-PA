const input = require("readline-sync");

let numeroDigitado = input.questionInt("Digite um número: ")

verificarNumeroPrimo(numeroDigitado)

function verificarNumeroPrimo(numero) {

    let mensagemFinal;

    if (numero > 1) {
        let dividendosNaoPrimo = [];
        let numeroPrimo = true;
                
        for (let divisores = 2; divisores < numero; divisores++) {
            if (numero % divisores == 0) {
                numeroPrimo = false

                dividendosNaoPrimo.push(divisores)
            }
        }
    
        if (numeroPrimo) {
            mensagemFinal = `Número ${numeroDigitado} é primo. Só é divisivel por 1 e ${numeroDigitado} (ele mesmo).`
        } else {
            // colocando na mensagem o primeiro e menor divisor possível do número não primo
            let mensagemDividendosPossiveis = `Ele é divisível por: ${dividendosNaoPrimo.shift()}`;

            // colocando na mensagem os outros divisores possíveis do número não primo 
            dividendosNaoPrimo.forEach(outrosDivisores => {
                mensagemDividendosPossiveis += `, ${outrosDivisores}`
            });
            mensagemFinal = `Número ${numeroDigitado} não é primo. ${mensagemDividendosPossiveis}.`
        }
    
    } else {
        let mensagemErro = numeroDigitado < 0 ? ` e não é natural. Logo é impossível verificar se é primo.` : `. Logo não pode ser primo!`
    
        mensagemFinal = `Número não é maior que 1${mensagemErro}`
    }

    console.log(mensagemFinal)
}