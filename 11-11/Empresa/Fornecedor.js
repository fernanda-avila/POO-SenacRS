"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
const Pessoa_1 = require("./Pessoa");
class Fornecedor extends Pessoa_1.Pessoa {
    constructor(_usuario, _senha, _nome, _status, cnpj, inativo) {
        super(_usuario, _senha, _nome, _status);
        this.cnpj = cnpj;
        this.inativo = inativo;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getInativo() {
        return this.inativo;
    }
    setInativo(inativo) {
        this.inativo = inativo;
    }
}
exports.Fornecedor = Fornecedor;
