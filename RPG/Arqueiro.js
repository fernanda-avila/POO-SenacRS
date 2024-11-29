"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const Personagem_1 = require("./Personagem");
class Arqueiro extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 120, 40, 8, 60);
    }
    // Ataque com flecha, dano entre 5 e 30
    atacar(alvo) {
        const dano = Math.floor(Math.random() * 25) + 5;
        console.log(`${this.getNome} ataca ${alvo.getNome} com uma flecha precisa, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }
    // Ataque especial com chance de acerto crítico
    tiroCerteiro(alvo) {
        const chanceCritico = Math.random() > 0.7;
        const dano = chanceCritico ? this.getForca() * 2 : this.getForca();
        console.log(`${this.getNome} usa Tiro Certeiro em ${alvo.getNome}, causando ${dano} de dano${chanceCritico ? ' com acerto crítico!' : '.'}`);
        alvo.receberDano(dano);
    }
}
exports.Arqueiro = Arqueiro;
