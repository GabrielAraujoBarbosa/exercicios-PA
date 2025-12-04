const notasAlunos = [9.25, 5.00, 8.75, 6.45, 7.52, 10.00, 4.55, 7.80, 8.15];


function calcularMediaNotas (arrayNotas) {
    let media = arrayNotas
        .reduce(function(acumuladorNotas, notaAtual) {
            return acumuladorNotas + notaAtual;
        }, 0); 

    return media /= arrayNotas.length
}

console.log(`A média da sala é ${ calcularMediaNotas(notasAlunos).toFixed(2) }`)