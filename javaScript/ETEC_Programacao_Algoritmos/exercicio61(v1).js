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
    
    for (let index = 0; index < arrayElementos.length; index++) {

        let quantidadeVezesElementoAparece = arrayElementos.filter( function (elemento) {
            return elemento == arrayElementos[index]
        }).length

        FrequenciaAbsolutaCadaNumero[`frequenciaAbsoluta_${arrayElementos[index]}`] = quantidadeVezesElementoAparece
    }
    return FrequenciaAbsolutaCadaNumero;
}

// Execução

let resultadoFrequencia = analisarFrequenciaElementos(nomes)

console.log(resultadoFrequencia)
