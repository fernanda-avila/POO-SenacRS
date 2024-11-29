"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personagem_1 = require("./Personagem");
class Mago extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 100, 50, 7, 200);
    }
    // Apenas tira pouco dano do alvo
    atacar(alvo) {
        const dano = this.getForca() - 10;
        console.log(`${this.getNome} ataca ${alvo.getNome} com uma magia poderosa, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }
    // Tira pouca vida do alvo e recupera bastante vida do Mago
    drenagemVital(alvo) {
        const dano = 5;
        const cura = this.getMagia() * 0.5;
        console.log(`${this.getNome} usa Drenagem Vital em ${alvo.getNome}, causando ${dano} de dano e recuperando ${cura} de vida.`);
        alvo.receberDano(dano);
        this.receberCura(cura);
    }
    // Método que cura o alvo
    curaDivina(alvo) {
        const cura = this.getMagia() * 0.7;
        console.log(`${this.getNome} usa Cura Divina em ${alvo.getNome}, restaurando ${cura} de vida.`);
        alvo.receberCura(cura);
    }
}
exports.Mago = Mago;
const mago1 = new Mago('Zephyros');
const mago2 = new Mago('Nyxen');
mago1.curaDivina(mago2); // Zephyros cura Nyxen
mago1.atacar(mago2); // Zephyros ataca Nyxen
mago1.drenagemVital(mago2); // Zephyros usa Drenagem Vital em Nyxen
