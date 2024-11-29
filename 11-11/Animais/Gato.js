"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const AnimalBase_1 = require("./AnimalBase");
class Gato extends AnimalBase_1.AnimalBase {
    constructor(peso, idade, sexo, nome, pedigree) {
        super(peso, idade, sexo);
        this.nome = nome;
        this.pedigree = pedigree;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPedigree() {
        return this.pedigree;
    }
    setPedigree(pedigree) {
        this.pedigree = pedigree;
    }
    movimentar() {
        return "O gato está se movendo silenciosamente.";
    }
    miar() {
        return "O gato está miando.";
    }
    comer() {
        super.comer(5); // Aumenta o peso em 5%
    }
}
exports.Gato = Gato;
