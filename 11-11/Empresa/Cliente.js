"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(_usuario, _senha, _nome, _status, cpf, ultimoAcesso) {
        super(_usuario, _senha, _nome, _status);
        this.cpf = cpf;
        this.ultimoAcesso = ultimoAcesso;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getUltimoAcesso() {
        return this.ultimoAcesso;
    }
    setUltimoAcesso(ultimoAcesso) {
        this.ultimoAcesso = ultimoAcesso;
    }
}
exports.Cliente = Cliente;
