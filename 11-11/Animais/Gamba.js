"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gamba = void 0;
const AnimalBase_1 = require("./AnimalBase");
class Gamba extends AnimalBase_1.AnimalBase {
    constructor(peso, idade, sexo, nivelAroma) {
        super(peso, idade, sexo);
        this.nivelAroma = Math.min(Math.max(nivelAroma, 0), 10); // Limita o nível entre 0 e 10
    }
    movimentar() {
        return "O gambá está caminhando lentamente.";
    }
    aromatizar() {
        return `O gambá libera um aroma com intensidade de ${this.nivelAroma}.`;
    }
    comer() {
        super.comer(5);
    }
    getNivelAroma() {
        return this.nivelAroma;
    }
    setNivelAroma(nivelAroma) {
        this.nivelAroma = Math.min(Math.max(nivelAroma, 0), 10);
    }
}
exports.Gamba = Gamba;
