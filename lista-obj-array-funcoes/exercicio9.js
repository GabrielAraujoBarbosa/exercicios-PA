const input = require("readline-sync"); // npm install readline-sync
const clear = require('console-clear'); // npm install console-clear


// função de delay
const sleep = (tempoMilisegundos) => new Promise(resolve => setTimeout(resolve, tempoMilisegundos));
// função para formatar números para Real (R$)
const formatarParaMoedaBrasileira = new Intl.NumberFormat('pt-BR', {
    style: 'currency', // Define o estilo como moeda
    currency: 'BRL', // Define a moeda como Real Brasileiro
});


// CONTA BANCÁRIA FIXA
let contaBancaria = {
    agencia: '7245',
    numero: '13184-7',
    senha: 'senha123',
    saldo: 859.55,
    historicoOperacoes: []
}


// Funções Secundárias (do Programa Principal):

// . LOGIN
function validarAcesso (tentativaAgencia, tentativaNumero, tentativaSenha, contaBancaria) {
    if (tentativaAgencia == contaBancaria.agencia &&
        tentativaNumero == contaBancaria.numero &&
        tentativaSenha == contaBancaria.senha) 
    {
        return true;
    } else {
        return false;
    }
}
function fazerLogin() {
    console.log(`Bem vindo ao Caixa Eletrônico!\n`)

    console.log("------------------------------------\n")
    console.log(`Login para Acessar sua Conta:\n`)
    
    let tentativaAgencia = input.question(" Agência: ")
    let tentativaConta = input.question(" Número da conta: ")
    let tentativaSenha = input.question(" Senha: ")
    console.log("\n------------------------------------\n")

    let statusLogin = validarAcesso(tentativaAgencia, tentativaConta, tentativaSenha, contaBancaria)

    statusLogin == true ? console.log("Login realizado com sucesso!") : console.log("Falha no login. Tente novamente.")

    return statusLogin;
}


// . 1 - CONSULTAR SALDO
function exibirSaldo (contaBancaria) {
    console.log(`- Saldo atual:`)
    console.log(` ${ formatarParaMoedaBrasileira.format(contaBancaria.saldo) }`)
    return true;
}

// . 2 - REALIZAR SAQUE
function validarSaque (valorSaque, contaBancaria) {
    if (valorSaque <= contaBancaria.saldo && valorSaque >= 5) {
        return true;
    } else {
        return false;
    }
}
function mostrarMensagemCedulasNotaAtual (quantidadeCedulas, valorCedula) {
    const palavraCedulaSingularPlural = quantidadeCedulas == 1 ? "cédula" : "cédulas";
    console.log(`${ quantidadeCedulas } ${ palavraCedulaSingularPlural } de ${ formatarParaMoedaBrasileira.format(valorCedula) }`)
}
function calcularSaque (valorSaque) {
    let arrayQuantidadeCedulas = [100.00, 50.00, 20.00, 10.00, 5.00];
    // indice 0 = cedulas de 100
    // indice 1 = cedulas de 50
    // indice 2 = cedulas de 20
    // indice 3 = cedulas de 10
    // indice 4 = cedulas de 5
    
    let totalSacar = 0, resto = valorSaque; 
    
    for (let index = 0; index < arrayQuantidadeCedulas.length; index++) {
        let valorCedula = arrayQuantidadeCedulas[index]
        arrayQuantidadeCedulas[index] = parseInt( resto / valorCedula, 10 )
        resto %= valorCedula
        
        totalSacar += arrayQuantidadeCedulas[index] * valorCedula

        if ( arrayQuantidadeCedulas[index] != 0 ) {
            mostrarMensagemCedulasNotaAtual(arrayQuantidadeCedulas[index], valorCedula)
        }
    }
    
    return {
        totalSacar : totalSacar,
        valorImpossivelSacar : (valorSaque - totalSacar)
    }
}
function realizarSaque (valorSaque, contaBancaria) {
    
    const podeSacar = validarSaque(valorSaque, contaBancaria) 
    
    if ( podeSacar ) {
        
        console.log("- CÉDULAS:")
        let resultadoCalculo = calcularSaque(valorSaque)
        
        if (resultadoCalculo.valorImpossivelSacar != 0) {
            console.log("\n- EXCEÇÃO:")
            console.log(`Não foi possível sacar ${ formatarParaMoedaBrasileira.format(resultadoCalculo.valorImpossivelSacar) }`)
            console.log(`(Trabalhamos apenas com notas de 100 a 5)`)
        }

        console.log("\n- SAQUE:")
        console.log(`Total Sacado: ${ formatarParaMoedaBrasileira.format(resultadoCalculo.totalSacar) }`)

        contaBancaria.saldo -= resultadoCalculo.totalSacar
    }
    else {
        console.log("Não foi possível realizar o saque!")
    }
    
    return podeSacar;
}


// . 3 - DEPOSITAR DINHEIRO
function validarDeposito (valorDepositar) {
    if (valorDepositar >= 2 ) {
        return true;
    }  
    else {
        return false;
    }
}
function depositarDinheiro (valorDepositar, contaBancaria) {
    const podeDepositar = validarDeposito(valorDepositar) 

    if (podeDepositar) {
        contaBancaria.saldo += valorDepositar

        console.log(` O valor de ${ formatarParaMoedaBrasileira.format(valorDepositar) } foi depositado na sua conta!`)
    }
    else {
        console.log(` Valor não possível de ser depositado!`)
    }
    
    return podeDepositar;
}


// . 4 - VER HISTÓRICO DE OPERAÇÕES
function adicionarHistoricoOperacao (tipoOperacao, statusOperacao, contaBancaria) {
    statusOperacao = statusOperacao == true ? "realizada com sucesso!": "não cumprida por impossibilidade.";
    
    contaBancaria.historicoOperacoes
        .push(`Operação de ${tipoOperacao} ${statusOperacao}`)
}
function mostrarHistoricoOperacoes (contaBancaria) {
    if (contaBancaria.historicoOperacoes.length > 0) {

        contaBancaria.historicoOperacoes
            .forEach(operacao => {
                console.log(`. [  ${operacao}  ]\n`)
            });
    }
    else {
        console.log("Ainda não foi realizada nenhuma operação nesta conta!")
    }
}


// MENU DE OPÇÕES E EXECUÇÃO DE OPÇÃO
function obterOpcaoMenu() {
    console.log(`\n--------- MENU DE OPÇÕES ---------\n`)
    console.log(` 1 - Consultar saldo`)
    console.log(` 2 - Realizar saque`)
    console.log(` 3 - Depositar dinheiro`)
    console.log(` 4 - Ver Histórico de Operações`)
    console.log(` 0 - Sair\n`)
    console.log(`------------------------------------\n`)

    const opcao = input.question("Escolha uma opção: ")
    return opcao;
}
function esperandoUsuarioVoltar() {
    input.question("\n\n (Pressione enter para voltar)")
}
function realizarOpcaoMenu(opcaoUsuario, contaBancaria) {
    let tipoOperacao, statusOperacao;

    switch (opcaoUsuario) { 
        case "1":
            tipoOperacao = "Consultar Saldo"

            clear();
            statusOperacao = exibirSaldo(contaBancaria)
            break;
        case "2":
            tipoOperacao = "Realizar Saque"
            
            clear();
            let quantidadeSacar = input.questionFloat("Quanto deseja sacar? R$ ")

            console.log()
            statusOperacao = realizarSaque(quantidadeSacar, contaBancaria)
            break;
        case "3":
            tipoOperacao = "Depositar Dinheiro"
            
            clear();
            let quantidadeDepositar = input.questionFloat("Quanto deseja depositar? R$ ")

            console.log()
            statusOperacao = depositarDinheiro(quantidadeDepositar, contaBancaria)
            break;
        case "4":
            clear();
            mostrarHistoricoOperacoes(contaBancaria)
            break;
        case "0":
            console.log("\nFechando o sistema.")
            break;
        default:
            console.log("\nOpção inválida! Tente novamente.")
    }

    if (opcaoUsuario >= 1 && opcaoUsuario <= 4) {
        esperandoUsuarioVoltar()
        
        if (opcaoUsuario != 4) {
            adicionarHistoricoOperacao(tipoOperacao, statusOperacao, contaBancaria)
        }
    }   
}


// PROGRAMA PRINCIPAL - ALGORITMO
async function main () {
    console.log()
    let quantidadeTentativasLogin = 0;

    // Processo de Login
    let statusLogin;
    do {
        statusLogin = fazerLogin()
        quantidadeTentativasLogin++;
        
        await sleep(3000);
        clear();
    } while (statusLogin == false && quantidadeTentativasLogin != 3);
    
    // Processo de Parada Manual, caso tentativas de login erradas excedidas (3)
    if (statusLogin == false) {
        console.log("OOPS! Limite Excedido de Tentativas do Login!")
        realizarOpcaoMenu("0")
        await sleep(2000);
        process.exit(0);
    }

    // Processo de Uso da Conta Bancária, realizado caso não executado 'Parada Manual'
    let opcaoDigitada;
    do {
        clear()

        opcaoDigitada = obterOpcaoMenu()
        await sleep(560);

        realizarOpcaoMenu(opcaoDigitada, contaBancaria)
        await sleep(1000);
    } while (opcaoDigitada != 0);
}


// EXECUÇÃO 
main()