const input = require("readline-sync");

console.log("            Caixa de Loja            ")
console.log("--------------------------------------")
console.log(" Preços devem ser maiores que 0, caso ")
console.log("   igual/menor, carrinho finalizado   ")
console.log()

let valorCarrinho = 0, precoItem = 0;
do { 
    valorCarrinho += precoItem
    precoItem = Number( input.question("Digite o preço do item: ") )
} while (precoItem > 0);

console.log()
console.log(`Total a pagar: R$ ${valorCarrinho.toFixed(2)}`)