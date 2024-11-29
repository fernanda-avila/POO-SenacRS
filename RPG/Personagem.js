"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, vida, forca, defesa, magia) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.magia = magia;
    }
    getNome() {
        return this.nome;
    }
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida < 0 ? 0 : novaVida;
    }
    getForca() {
        return this.forca;
    }
    getDefesa() {
        return this.defesa;
    }
    getMagia() {
        return this.magia;
    }
    //método para aplicar dano, diminuindo a vid do personagem
    receberDano(dano) {
        this.setVida(this.vida - dano);
        return `${this.nome} recebeu ${dano} de dano e agora tem ${this.vida} de vida`;
    }
    receberCura(cura) {
        this.setVida(this.vida + cura);
        return `${this.nome} recebeu ${cura} de cura e agora tem ${this.vida} de vida`;
    }
}
exports.Personagem = Personagem;
