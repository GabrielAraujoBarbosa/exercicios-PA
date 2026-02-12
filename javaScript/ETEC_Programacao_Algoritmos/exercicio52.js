let termoAnteanteriorDoSucessor  = 1;
let termoAnteriorDoSucessor = 1;
let termoSucessor = termoAnteanteriorDoSucessor + termoAnteriorDoSucessor;

let mensagemSequenciaFibonacci = `${termoAnteanteriorDoSucessor}, ${termoAnteriorDoSucessor}, ${termoSucessor}`;

// Laço para obter os próximos 27 termos da sequência (sabendo que já temos 3 termos, mais outros 27 obtêm-se 30 termos)
for (let quantidadeTermosEncontrados = 3; quantidadeTermosEncontrados < 30; quantidadeTermosEncontrados++) {
    termoAnteanteriorDoSucessor = termoAnteriorDoSucessor
    termoAnteriorDoSucessor = termoSucessor
    
    termoSucessor = termoAnteanteriorDoSucessor + termoAnteriorDoSucessor
    mensagemSequenciaFibonacci += `, ${termoSucessor}`
}

console.log("30 Termos da Sequência de Fibonacci:");
console.log()
console.log(mensagemSequenciaFibonacci)