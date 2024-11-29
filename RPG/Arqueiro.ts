import { Personagem } from "./Personagem";
export class Arqueiro extends Personagem {
    constructor(nome: string) {
        super(nome, 120, 40, 8, 60);
    }
    // Ataque com flecha, dano entre 5 e 30
    public atacar(alvo: Personagem): void {
        const dano = Math.floor(Math.random() * 25) + 5;
        console.log(`${this.getNome} ataca ${alvo.getNome} com uma flecha precisa, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }

    // Ataque especial com chance de acerto crítico
    public tiroCerteiro(alvo: Personagem): void {
        const chanceCritico = Math.random() > 0.7; 
        const dano = chanceCritico ? this.getForca() * 2 : this.getForca();
        console.log(`${this.getNome} usa Tiro Certeiro em ${alvo.getNome}, causando ${dano} de dano${chanceCritico ? ' com acerto crítico!' : '.'}`);
        alvo.receberDano(dano);
    }
}
