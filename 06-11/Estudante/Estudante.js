"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const teclado = (0, prompt_sync_1.default)();
class Estudante {
    constructor(nome, idade, nota, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
        this.matricula = matricula;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getNota() {
        return this.nota;
    }
    setNota(nota) {
        this.nota = nota;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    calcularMedia() {
        const total = this.nota.reduce((acumulado, valor) => acumulado + valor, 0);
        return total / this.nota.length;
    }
}
const nota1 = parseFloat(teclado('Digite a nota 1: '));
const nota2 = parseFloat(teclado('Digite a nota 2: '));
const nota3 = parseFloat(teclado('Digite a nota 3: '));
const notas = new Float32Array([nota1, nota2, nota3]);
const estudante = new Estudante('Claudia', 16, notas, '501313');
const media = estudante.calcularMedia();
console.log(`A média das notas de ${estudante.getNome()} é: ${media.toFixed(2)}`);
