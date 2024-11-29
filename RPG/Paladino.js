"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paladino = void 0;
const Personagem_1 = require("./Personagem");
class Paladino extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 200, 20, 5, 100);
    }
    // Ataque com espada, dano moderado e cura
    atacar(alvo) {
        const dano = Math.floor(Math.random() * 15) + 10;
        console.log(`${this.getNome} ataca ${alvo.getNome} com sua espada sagrada, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }
    // Poder que cura o Paladino e aumenta a defesa por um tempo
    bençãoDivina() {
        const cura = this.getMagia() + 20;
        console.log(`${this.getNome} usa Benção Divina, curando-se em ${cura} e aumentando sua defesa.`);
        this.receberCura(cura);
        // aumento de defesa por um tempo
        setTimeout(() => {
            console.log(`${this.getNome} sente a benção divina desaparecer.`);
        }, 5000); // Defesa aumentada por 5 segundos
    }
}
exports.Paladino = Paladino;
