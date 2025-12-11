const nomes = [
    // Nomes Repetidos
    "Ana", "Bruno", "Gabriel", "Mariana", "Lucas",
    "Ana", "Bruno", "Gabriel", "Mariana", "Lucas",
    "Ana", "Bruno", "Gabriel", "Mariana", 
    "Ana", "Bruno", "Gabriel",

    // Nomes sem Repetição
    "Carla", "Daniel", "Fernanda", "Igor", "Juliana",
    "Otavio", "Paulo", "Helena", "Nathalia", "Eduardo",
    "Mariana"
];


function analisarFrequenciaElementos (arrayElementos) {
    let FrequenciaAbsolutaCadaNumero = {};

    while (arrayElementos.length >= 1) {
        let elementoBuscado = arrayElementos[0];
        let quantidadeVezesElementoAparece = 0;

        for (let index = 0; index < arrayElementos.length; index++) {
            if (elementoBuscado == arrayElementos[index]) {
                quantidadeVezesElementoAparece++
                arrayElementos.splice(index, 1)
                index--
            }
        }

        FrequenciaAbsolutaCadaNumero[`frequenciaAbsoluta_${elementoBuscado}`] = quantidadeVezesElementoAparece
    }

    return FrequenciaAbsolutaCadaNumero;
}

// Execução

let resultadoFrequencia = analisarFrequenciaElementos(nomes)

console.log(resultadoFrequencia)
