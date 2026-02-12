const input = require("readline-sync");

// RECURSOS PRINCIPAIS //
function mostrarMenu () {
    console.log(`===== MENU PRINCIPAL =====`)
    console.log(`1 - Calcular Tabuada`)
    console.log(`2 - Verificar Número Primo`)
    console.log(`3 - Gerar Sequência de Fibonacci`)
    console.log(`4 - Calcular Fatorial`)
    console.log(`0 - Sair`)
    console.log(`==========================`)
}
function pedirOpcao () {
    let opcaoDigitada = input.questionInt("Opção desejada: ")
    return opcaoDigitada
}
function limparTela() {
    console.clear()
    console.clear()
    console.clear()
}

// TAREFA 1
function calcularTabuada() {

    let fator1 = input.questionInt("Digite o número da tabuada: ")
    
    console.log()
    
    for (let fator2 = 1; fator2 <= 10; fator2++) {
        console.log(`${fator1} x ${fator2} = ${fator1 * fator2}`) 
    } 
}

// TAREFA 2
function numeroPrimo() {

    let mensagemFinal;
    let numeroDigitado = input.questionInt("Digite o número a ser analisado: ")

    console.log()

    if (numeroDigitado > 1) {
        let dividendosNaoPrimo = [];
        let numeroPrimo = true;
                
        for (let divisores = 2; divisores < numeroDigitado; divisores++) {
            if (numeroDigitado % divisores == 0) {
                numeroPrimo = false

                dividendosNaoPrimo.push(divisores)
            }
        }
    
        if (numeroPrimo) {
            mensagemFinal = `Número ${numeroDigitado} é primo. Só é divisivel por 1 e ${numeroDigitado} (ele mesmo).`
        } else {
            // colocando na mensagemComplementar o primeiro, e menor, divisor possível do número não primo
            let mensagemDividendosPossiveis = `Ele é divisível por: ${dividendosNaoPrimo.shift()}`;

            // colocando na mensagemComplementar os outros divisores possíveis do número não primo (se tiver)
            dividendosNaoPrimo.forEach(outrosDivisores => {
                mensagemDividendosPossiveis += `, ${outrosDivisores}`
            });
            mensagemFinal = `Número ${numeroDigitado} não é primo. ${mensagemDividendosPossiveis} (além de 1 e ele mesmo).`
        }
    
    } else {
        let mensagemErro = numeroDigitado < 0 ? ` e não é natural. Logo é impossível verificar se é primo.` : `. Logo não pode ser primo!`
    
        mensagemFinal = `Número não é maior que 1${mensagemErro}`
    }

    console.log(mensagemFinal)
}

// TAREFA 3
function gerarSequenciaFibonacci(quantidadeTermosParaEncontrar = 30) {
    let termoAnteanteriorDoSucessor  = 1;
    let termoAnteriorDoSucessor = 1;
    let termoSucessor = termoAnteanteriorDoSucessor + termoAnteriorDoSucessor;
    

    let mensagemSequenciaFibonacci = `${termoAnteanteriorDoSucessor}, ${termoAnteriorDoSucessor}, ${termoSucessor}`;

    // Laço para obter os próximos 27 termos da sequência (sabendo que já temos 3 termos, mais outros 27 obtêm-se 30 termos)
    for (let quantidadeTermosEncontrados = 3; quantidadeTermosEncontrados < quantidadeTermosParaEncontrar; quantidadeTermosEncontrados++) {
        termoAnteanteriorDoSucessor = termoAnteriorDoSucessor
        termoAnteriorDoSucessor = termoSucessor
        
        termoSucessor = termoAnteanteriorDoSucessor + termoAnteriorDoSucessor
        mensagemSequenciaFibonacci += `, ${termoSucessor}`
    }

    console.log("30 Termos da Sequência de Fibonacci:");
    console.log()
    console.log(mensagemSequenciaFibonacci)
}

// TAREFA 4
function calcularFatorial() {

    let numeroFatorial;
    do { 
        numeroFatorial = input.questionInt("Digite o número a ser fatorial: ")
    } while (numeroFatorial < 0);
    
    console.log();
    
    let mensagemResultado = `${numeroFatorial}! = `;
    
    let resultadoFatorial = 1;

    let numeroFatorialMaiorQue1 = false;
    
    for (let numerosFatorar = numeroFatorial; numerosFatorar > 1; numerosFatorar--) {
        
        mensagemResultado += `${numerosFatorar} x `
    
        resultadoFatorial *= numerosFatorar
    
        numeroFatorialMaiorQue1 = true;
    }
    
    if (numeroFatorialMaiorQue1) {
        mensagemResultado += "1 = "
    }
    
    mensagemResultado += `${resultadoFatorial}`
    
    console.log(mensagemResultado);
}


function main () {
    mostrarMenu()
    console.log()
    let opcaoUsuario = pedirOpcao()
    
    while (opcaoUsuario != 0) {
        limparTela()
    
        switch(opcaoUsuario) {
            case 1:
                calcularTabuada()
                break;
            case 2:
                numeroPrimo()
                break;
            case 3:
                gerarSequenciaFibonacci()
                break;
            case 4:
                calcularFatorial()
                break;
            default:
                console.log("Opção Inválida! Digite um valor válido!")
        }
        
        input.question("")
        limparTela()
    
        mostrarMenu()
        console.log()
        opcaoUsuario = pedirOpcao()
    }
}


/* EXECUÇÃO */
main()