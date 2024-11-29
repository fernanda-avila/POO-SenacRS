"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(usuario, senha, nome, status) {
        this._usuario = usuario;
        this._senha = senha;
        this._nome = nome;
        this._status = status;
    }
    getUsuario() {
        return this._usuario;
    }
    setUsuario(usuario) {
        this._usuario = usuario;
    }
    getSenha() {
        return this._senha;
    }
    setSenha(senha) {
        this._senha = senha;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getStatus() {
        return this._status;
    }
    setStatus(status) {
        this._status = status;
    }
}
exports.Pessoa = Pessoa;
