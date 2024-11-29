"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioProfessor = void 0;
const Pessoa_1 = require("./Pessoa");
class FuncionarioProfessor extends Pessoa_1.Pessoa {
    constructor(nome, cpf, endereco, estadoCivil, salario, setor, titulacao) {
        super(nome, cpf, endereco, estadoCivil);
        this.salario = salario;
        this.titulacao = titulacao;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        return this.salario = salario;
    }
    getSetor() {
        return this.titulacao;
    }
    setSetor(setor) {
        return this.titulacao = setor;
    }
}
exports.FuncionarioProfessor = FuncionarioProfessor;
