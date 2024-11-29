import { Personagem } from "./Personagem";
export class Paladino extends Personagem {
    constructor(nome: string) {
        super(nome, 200, 20, 5, 100); 
    }

    // Ataque com espada, dano moderado e cura
    public atacar(alvo: Personagem): void {
        const dano = Math.floor(Math.random() * 15) + 10;
        console.log(`${this.getNome} ataca ${alvo.getNome} com sua espada sagrada, causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }

    // Poder que cura o Paladino e aumenta a defesa por um tempo
    public bençãoDivina(): void {
        const cura = this.getMagia() + 20; 
        console.log(`${this.getNome} usa Benção Divina, curando-se em ${cura} e aumentando sua defesa.`);
        this.receberCura(cura);

        // aumento de defesa por um tempo
        setTimeout(() => {
            console.log(`${this.getNome} sente a benção divina desaparecer.`);
        }, 5000); // Defesa aumentada por 5 segundos
    }
}