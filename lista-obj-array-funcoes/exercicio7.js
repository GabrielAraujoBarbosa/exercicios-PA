const listaSupermercado = [
  { nome: "Arroz", quantidade: 2, preco: 22.90 },
  { nome: "Feijão", quantidade: 1, preco: 8.50 },
  { nome: "Leite", quantidade: 3, preco: 5.49 },
  { nome: "Pão", quantidade: 10, preco: 0.80 },
  { nome: "Ovos", quantidade: 12, preco: 0.50 }
];


function calcularValorTotalCarrinho (arrayItens) {
  const total = arrayItens.reduce( function (acumulador, objetoItemIndice, indice) {
    return acumulador + (objetoItemIndice.preco * objetoItemIndice.quantidade);
  }, 0);

  return total;
}

function mostrarValorTotalCarrinho (arrayItens) {
  const formatarParaMoedaBrasileira = new Intl.NumberFormat('pt-BR', {
    style: 'currency', // Define o estilo como moeda
    currency: 'BRL', // Define a moeda como Real Brasileiro
  });
  
  const total = calcularValorTotalCarrinho(arrayItens);
  const totalFormatado = formatarParaMoedaBrasileira.format(total);

  console.log(`Valor total da sua compra: ${totalFormatado}`)
}


// Execução
mostrarValorTotalCarrinho(listaSupermercado)
