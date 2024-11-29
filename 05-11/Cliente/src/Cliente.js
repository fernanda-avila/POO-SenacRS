"use strict";
class Cliente {
    constructor(nome, cpf, dataNasc, qtdDin) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.qtdDin = qtdDin;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(cpf) {
        this.cpf = cpf;
    }
    getDataNasc() {
        return this.dataNasc;
    }
    getQtdDin() {
        return this.qtdDin;
    }
    setQtdDin(qtdDin) {
        this.qtdDin = qtdDin;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cpf: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNasc.toLocaleDateString()}`);
        console.log(`Quantia em dinheiro: R$ ${this.qtdDin}`);
    }
    temDinheiroSuficiente(valorCompra) {
        return this.qtdDin >= valorCompra;
    }
}
const cliente = new Cliente("Fernanda", "123456789-0", new Date(1997, 11, 12), 100);
cliente.exibirInformacoes();
const valorCompra = 75;
if (cliente.temDinheiroSuficiente(valorCompra)) {
    console.log(`O cliente pode realizar a compra de R$ ${valorCompra}.`);
}
else {
    console.log(`O cliente não tem dinheiro suficiente para a compra de R$ ${valorCompra}.`);
}
