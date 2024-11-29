"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const AnimalBase_1 = require("./AnimalBase");
class Cachorro extends AnimalBase_1.AnimalBase {
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
        return "O cachorro está correndo.";
    }
    latir() {
        return "O cachorro está latindo.";
    }
    comer() {
        super.comer(10);
    }
}
exports.Cachorro = Cachorro;
