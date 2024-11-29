"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalBase = void 0;
class AnimalBase {
    constructor(peso, idade, sexo) {
        this.peso = peso;
        this.idade = idade;
        this.sexo = sexo;
    }
    comer(percentualAumentoPeso) {
        this.peso += this.peso * percentualAumentoPeso / 100;
    }
    envelhecer() {
        this.idade += 1;
    }
    getPeso() {
        return this.peso;
    }
    getIdade() {
        return this.idade;
    }
    getSexo() {
        return this.sexo;
    }
}
exports.AnimalBase = AnimalBase;
