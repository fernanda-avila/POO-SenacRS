"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PJuridica = void 0;
const Pessoa_1 = require("./Pessoa");
class PJuridica extends Pessoa_1.Pessoa {
    constructor(nome, idade, cnpj, razaoSocial) {
        super(nome, idade);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }
    getcnpj() {
        return this.cnpj;
    }
    setcnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getrazaoSocial() {
        return this.razaoSocial;
    }
    setrazaoSocial(razaoSocial) {
        this.razaoSocial = razaoSocial;
    }
}
exports.PJuridica = PJuridica;
