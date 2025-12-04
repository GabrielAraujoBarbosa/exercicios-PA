let listaProdutos = [
    { nome: "Refrigerante Coca-cola", preco: 3.50 },
    { nome: "Biscoito Trakinas", preco: 2.50 },
    { nome: "Cereal Nescau", preco: 8.00 },
    { nome: "Cookies Bauduco", preço: 4.99 },
    { nome: "Salgadinho Cheetos", preco: 4.19 },
    { nome: "Pão de Forma Panco", preco: 8.99 },
    { nome: "Shampoo L'Oréal", preco: 58.99 },
    { nome: "Natura Deo Parfum Homem Essence", preco: 114.99 }
];

function produtosComPrecoAcimaDe50 (listaProdutos) {
    return listaProdutos.filter(function (objetoProduto) {
        return objetoProduto.preco > 50.00
    })
}

// CHAMADA E EXECUÇÃO
produtosComPrecoAcimaDe50(listaProdutos)
    .forEach(objetoProduto => {
        console.log(`O produto "${objetoProduto.nome}" está R$ ${objetoProduto.preco.toFixed(2)}`)
    })

