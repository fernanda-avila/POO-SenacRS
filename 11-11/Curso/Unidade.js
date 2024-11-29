"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidade = void 0;
const Modelo_1 = require("./Modelo");
class unidade extends Modelo_1.modelo {
    constructor(nome, id, ativo) {
        super(nome, id);
        this.ativo = ativo;
    }
    getAtivo() {
        return this.ativo;
    }
    setAtivo(ativo) {
        this.ativo = ativo;
    }
}
exports.unidade = unidade;
