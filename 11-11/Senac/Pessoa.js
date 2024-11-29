"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cpf, endereco, estadoCivil) {
        this._nome = nome;
        this._cpf = cpf;
        this._endereco = endereco;
        this._estadoCivil = estadoCivil;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getCPF() {
        return this._cpf;
    }
    getEndereco() {
        return this._endereco;
    }
    setEndereco(endereco) {
        this._endereco = endereco;
    }
    getEstadoCivil() {
        return this._estadoCivil;
    }
    setEstadoCivil(estadoCivil) {
        this._estadoCivil = estadoCivil;
    }
}
exports.Pessoa = Pessoa;
