"use strict";
class Produto {
    constructor(codigo, nome, valorCompra, valorVenda, estoque, estoqueMin) {
        this.codigo = codigo;
        this.nome = nome;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.estoque = estoque;
        this.estoqueMin = estoqueMin;
    }
    getcodigo() {
        return this.codigo;
    }
    setcodigo(codigo) {
        this.codigo = codigo;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getvalorCompra() {
        return this.valorCompra;
    }
    setvalorCompra(valorCompra) {
        this.valorCompra = valorCompra;
    }
    getvalorVenda() {
        return this.valorVenda;
    }
    setvalorVenda(valorVenda) {
        this.valorVenda = valorVenda;
    }
    getestoque() {
        return this.estoque;
    }
    setestoque(estoque) {
        this.estoque = estoque;
    }
    getestoqueMin() {
        return this.estoqueMin;
    }
    setestoqueMin(estoqueMin) {
        this.estoqueMin = estoqueMin;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Codigo: ${this.codigo}`);
        console.log(`valor da Compra: ${this.valorCompra}`);
        console.log(`Valor da Venda: ${this.valorVenda}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`estoque Minimo: ${this.estoqueMin}`);
    }
}
const produto = new Produto(1, 'Produto A', 10, 20, 100, 20);
produto.exibirInformacoes();
