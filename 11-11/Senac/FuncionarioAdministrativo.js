"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioAdministrativo = void 0;
const Pessoa_1 = require("./Pessoa");
class FuncionarioAdministrativo extends Pessoa_1.Pessoa {
    constructor(nome, cpf, endereco, estadoCivil, salario, setor) {
        super(nome, cpf, endereco, estadoCivil);
        this.salario = salario;
        this.setor = setor;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        return this.salario = salario;
    }
    getSetor() {
        return this.setor;
    }
    setSetor(setor) {
        return this.setor = setor;
    }
}
exports.FuncionarioAdministrativo = FuncionarioAdministrativo;
