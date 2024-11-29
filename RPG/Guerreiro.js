"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 150, 30, 10, 50);
    }
    // Ataque de dano aleatório
    atacar(alvo) {
        const dano = Math.floor(Math.random() * this.getForca()) + 5;
        console.log(`${this.getNome} ataca ${alvo.getNome} com sua espada, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }
}
exports.Guerreiro = Guerreiro;
// Guerreiros
const guerreiro1 = new Guerreiro('Ragnar');
const guerreiro2 = new Guerreiro('Thorin');
const guerreiro3 = new Guerreiro('Aldric');
const guerreiro4 = new Guerreiro('Galahad');
const guerreiro5 = new Guerreiro('Bjorn');
const guerreiro6 = new Guerreiro('Drakar');
const guerreiro7 = new Guerreiro('Eirik');
guerreiro1.atacar(guerreiro2); // Ragnar ataca Thorin causando dano aleatório
guerreiro3.atacar(guerreiro4); // Aldric ataca Galahad causando dano aleatório
guerreiro5.atacar(guerreiro6); // Bjorn ataca Drakar causando dano aleatório
guerreiro7.atacar(guerreiro1); // Eirik ataca Ragnar causando dano aleatório
