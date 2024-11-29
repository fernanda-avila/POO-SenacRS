"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const Pessoa_1 = require("./Pessoa");
class Aluno extends Pessoa_1.Pessoa {
    constructor(nome, cpf, endereco, estadoCivil, turma) {
        super(nome, cpf, endereco, estadoCivil);
        this.turma = turma;
    }
    getTurma() {
        return this.turma;
    }
    setTurma(turma) {
        this.turma = turma;
    }
}
exports.Aluno = Aluno;
