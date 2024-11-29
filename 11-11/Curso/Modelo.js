"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelo = void 0;
class modelo {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
exports.modelo = modelo;
