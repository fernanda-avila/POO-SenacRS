"use strict";
class Funcionario {
    constructor(nome, cpf, dataNascimento, salario, dataAdmissao, cargo, motivacao, credibilidade) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
        this.cargo = cargo;
        this.motivacao = motivacao;
        this.credibilidade = credibilidade;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNascimento.toDateString()}`);
        console.log(`Salário: R$${this.salario.toFixed(2)}`);
        console.log(`Data de Admissão: ${this.dataAdmissao.toDateString()}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Motivação: ${this.motivacao}`);
        console.log(`Credibilidade: ${this.credibilidade}`);
    }
}
const funcionario = new Funcionario("Carlos Silva", 12345678900, new Date("1985-10-12"), 4500, new Date("2020-03-15"), "Gerente", "Alta", "Muito confiável");
funcionario.exibirInformacoes();
