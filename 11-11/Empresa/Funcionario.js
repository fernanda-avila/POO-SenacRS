"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(_usuario, _senha, _nome, _status, cpf, admissao, ultimoAcesso, inativo) {
        super(_usuario, _senha, _nome, _status);
        this.cpf = cpf;
        this.admissao = admissao;
        this.ultimoAcesso = ultimoAcesso;
        this.inativo = inativo;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getAdmissao() {
        return this.admissao;
    }
    setAdmissao(admissao) {
        this.admissao = admissao;
    }
    getUltimoAcesso() {
        return this.ultimoAcesso;
    }
    setUltimoAcesso(ultimoAcesso) {
        this.ultimoAcesso = ultimoAcesso;
    }
    getInativo() {
        return this.inativo;
    }
    setInativo(inativo) {
        this.inativo = inativo;
    }
}
exports.Funcionario = Funcionario;
