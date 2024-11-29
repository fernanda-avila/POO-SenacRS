"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco, qtdeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.qtdeEstoque = qtdeEstoque;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        if (novoNome.length === 0) {
            console.log("Nome inválido.");
        }
        else {
            this.nome = novoNome;
        }
    }
    getPreco() {
        return this.preco;
    }
    setPreco(novoPreco) {
        this.preco = novoPreco;
    }
    getEstoque() {
        return this.qtdeEstoque;
    }
    setEstoque(novoEstoque) {
        this.qtdeEstoque = novoEstoque;
    }
    mostrarInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade em estoque: ${this.qtdeEstoque}`);
    }
}
exports.Produto = Produto;
const produtoNotebook = new Produto('Notebook ASUS', 4999, 5);
const produtoFone = new Produto('Fone de ouvido JBL', 299, 2);
produtoFone.setEstoque(10);
produtoFone.mostrarInfo();
produtoNotebook.setEstoque(15);
produtoNotebook.mostrarInfo();
