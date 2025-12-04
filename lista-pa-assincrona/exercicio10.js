const input = require("readline-sync");

// Obtenção de um número válido para Fatorial (qualquer número positivo ou 0)
let numeroFatorial;
do { 
    numeroFatorial = input.questionInt("Digite um número: ")
} while (numeroFatorial < 0);

let respostas = calcularFatorial(numeroFatorial)

console.log()
// Mostrando a mensagem completa na saída
console.log(respostas[0])


function calcularFatorial(numeroFatorial) {

    // Início da mensagem final 
    let mensagemResultado = `${numeroFatorial}! = `;
    
    // Atribuindo o resultado padrão no Fatorial (para todo cálculo de fatorial, o resultado será no mínimo 1)
    let resultadoFatorial = 1;
    
    // Criação de variável para saber se entrou no laço ou não; saber se numero para encontrar fatorial é maior que 1
    let numeroFatorialMaiorQue1 = false;
    
    // Laço que executa se o numero que deseja encontrar fatorial for maior que 1 (por causa da condição)
    for (let numerosFatorar = numeroFatorial; numerosFatorar > 1; numerosFatorar--) {
        
        // Mensagem sendo feita, considerando que sempre vai faltar um próximo antecessor (podendo ser da próxima repetição do laço ou, quando sair, o 1)
        mensagemResultado += `${numerosFatorar} x `
    
        // Multiplicando os números relevantes para resultado fatorial (até 2)
        resultadoFatorial *= numerosFatorar
    
        // Confirmando que entrou no laço; que o numero que deseja encontrar fatorial é maior que 1
        numeroFatorialMaiorQue1 = true;
    }
    
    // Adicionando na mensagem o último antecessor restante(1), caso numeroFatorial maior que 1 
    if (numeroFatorialMaiorQue1) {
        mensagemResultado += "1 = "
    }
    
    // Finalizando a mensagem com o resultado final
    mensagemResultado += `${resultadoFatorial}`
    
    return [mensagemResultado, resultadoFatorial];
}
