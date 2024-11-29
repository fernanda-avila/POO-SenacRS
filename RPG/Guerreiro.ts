import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(nome, 150, 30, 10, 50);
    }

    // Ataque de dano aleatório
    public atacar(alvo: Personagem): void {
        const dano = Math.floor(Math.random() * this.getForca()) + 5;
        console.log(`${this.getNome} ataca ${alvo.getNome} com sua espada, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }
}

// Guerreiros
const guerreiro1: Personagem = new Guerreiro('Ragnar');
const guerreiro2: Personagem = new Guerreiro('Thorin');
const guerreiro3: Personagem = new Guerreiro('Aldric');
const guerreiro4: Personagem = new Guerreiro('Galahad');
const guerreiro5: Personagem = new Guerreiro('Bjorn');
const guerreiro6: Personagem = new Guerreiro('Drakar');
const guerreiro7: Personagem = new Guerreiro('Eirik');


guerreiro1.atacar(guerreiro2);  // Ragnar ataca Thorin causando dano aleatório
guerreiro3.atacar(guerreiro4);  // Aldric ataca Galahad causando dano aleatório
guerreiro5.atacar(guerreiro6);  // Bjorn ataca Drakar causando dano aleatório
guerreiro7.atacar(guerreiro1);  // Eirik ataca Ragnar causando dano aleatório
