"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assassino = void 0;
const Personagem_1 = require("./Personagem");
class Assassino extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 100, 50, 15, 70);
    }
    // Ataque com adaga, dano aleatório
    atacar(alvo) {
        const dano = Math.floor(Math.random() * 30) + 10;
        console.log(`${this.getNome} ataca ${alvo.getNome} com uma adaga rápida, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }
    // Golpe com chance de envenenar o alvo (dano de longa duração)
    ataqueSombrio(alvo) {
        const danoInicial = Math.floor(Math.random() * 20) + 5;
        const danoVeneno = 10;
        console.log(`${this.getNome} usa Ataque Sombrio em ${alvo.getNome}, causando ${danoInicial} de dano e envenenando o alvo.`);
        alvo.receberDano(danoInicial);
        // Dano ao longo do tempo
        setTimeout(() => {
            console.log(`${alvo.getNome} sofre ${danoVeneno} de dano pelo veneno.`);
            alvo.receberDano(danoVeneno);
        }, 2000); // Dano causado em 2 segundos
    }
}
exports.Assassino = Assassino;