"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peixe = void 0;
const AnimalBase_1 = require("./AnimalBase");
class Peixe extends AnimalBase_1.AnimalBase {
    constructor(peso, idade, sexo, escama) {
        super(peso, idade, sexo);
        this.escama = escama;
    }
    getEscama() {
        return this.escama;
    }
    setEscama(escama) {
        this.escama = escama;
    }
    movimentar() {
        return "O peixe está nadando.";
    }
}
exports.Peixe = Peixe;
