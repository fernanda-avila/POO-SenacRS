"use strict";
class Funcionario {
    constructor(nome, salario, cpf) {
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        if (salario <= 0) {
            console.error("Erro: o salário deve ser maior que zero.");
            return;
        }
        this.salario = salario;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(cpf) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            console.error("Erro: o CPF informado é inválido. O formato deve ser 000.000.000-00.");
            return;
        }
        this.cpf = cpf;
    }
    exibirInformacoes() {
        console.log(`
Informações do Funcionário:
---------------------------------------
Nome: ${this.nome}
Salário: R$ ${this.salario.toFixed(2)}
CPF: ${this.cpf}
---------------------------------------
        `);
    }
    exibirInformacoesAtualizadas() {
        console.log(`
Informações Atualizadas do Funcionário:
---------------------------------------
Nome: ${this.nome}
Salário: R$ ${this.salario.toFixed(2)}
CPF: ${this.cpf}
---------------------------------------
        `);
    }
    aumentarSalario(percentual) {
        if (percentual <= 0) {
            console.error("Erro: o  aumento deve ser maior que zero.");
            return;
        }
        this.salario += this.salario * (percentual / 100);
        console.log(`
Aumento de Salário Concedido:
---------------------------------------
Percentual de Aumento: ${percentual}%
Novo Salário: R$ ${this.salario.toFixed(2)}
---------------------------------------
        `);
    }
}
const funcionario = new Funcionario("João", 3000, "123.456.789-00");
funcionario.exibirInformacoes();
funcionario.aumentarSalario(10);
funcionario.exibirInformacoesAtualizadas();
