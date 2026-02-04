const input = require("readline-sync");

console.log("            Caixa de Loja            ")
console.log("--------------------------------------")
console.log(" Preços devem ser maiores que 0, caso ")
console.log("   igual/menor, carrinho finalizado   ")
console.log()

let precosItens = [];
do { 
    precosItens.push( Number( input.question("Digite o preço do item: ") ) )
} while (precosItens[precosItens.length - 1] > 0);

let valorCarrinho = precosItens.reduce( function (acumuladorPrecos, precoItemAtual){
    return acumuladorPrecos + precoItemAtual;
})

console.log()
console.log(`Total a pagar: R$ ${valorCarrinho.toFixed(2)}`)