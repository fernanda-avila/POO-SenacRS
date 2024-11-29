"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    adicionarEstoque(qtd) {
        if (qtd > 0) {
            this.quantidade += qtd;
            console.log(`${qtd} unidades adicionadas ao estoque.`);
        }
        else {
            console.log('Quantidade inválida para adicionar ao estoque.');
        }
    }
    removerEstoque(qtd) {
        if (qtd > 0) {
            if (this.quantidade >= qtd) {
                this.quantidade -= qtd;
                console.log(`${qtd} unidades removidas do estoque.`);
            }
            else {
                console.log('Estoque insuficiente.');
            }
        }
        else {
            console.log('Quantidade inválida para remover do estoque.');
        }
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`);
    }
}
const produto = new Produto('Camiseta', 50, 10);
produto.exibirInformacoes();
produto.adicionarEstoque(5);
produto.removerEstoque(3);
produto.exibirInformacoes();
produto.removerEstoque(15);
