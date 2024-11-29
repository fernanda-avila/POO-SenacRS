"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PFisica = void 0;
const Pessoa_1 = require("./Pessoa");
class PFisica extends Pessoa_1.Pessoa {
    constructor(nome, idade, cpf, cnh) {
        super(nome, idade);
        this.cpf = cpf;
        this.cnh = cnh;
    }
    getcpf() {
        return this.cpf;
    }
    setcpf(cpf) {
        this.cpf = cpf;
    }
    getCcnh() {
        return this.cnh;
    }
    setcnh(cnh) {
        this.cnh = cnh;
    }
}
exports.PFisica = PFisica;
