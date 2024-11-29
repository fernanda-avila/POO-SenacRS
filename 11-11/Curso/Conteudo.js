"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conteudo = void 0;
const Modelo_1 = require("./Modelo");
class conteudo extends Modelo_1.modelo {
    constructor(nome, id, url) {
        super(nome, id);
        this.url = url;
    }
    getUrl() {
        return this.url;
    }
    setUrl(url) {
        this.url = url;
    }
}
exports.conteudo = conteudo;
