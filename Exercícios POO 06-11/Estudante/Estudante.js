"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var teclado = (0, prompt_sync_1.default)();
var Estudante = /** @class */ (function () {
    function Estudante(nome, idade, nota, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
        this.matricula = matricula;
    }
    Estudante.prototype.getNome = function () {
        return this.nome;
    };
    Estudante.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Estudante.prototype.getIdade = function () {
        return this.idade;
    };
    Estudante.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Estudante.prototype.getNota = function () {
        return this.nota;
    };
    Estudante.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    Estudante.prototype.getMatricula = function () {
        return this.matricula;
    };
    Estudante.prototype.setMatricula = function (matricula) {
        this.matricula = matricula;
    };
    Estudante.prototype.calcularMedia = function () {
        var total = this.nota.reduce(function (acumulado, valor) { return acumulado + valor; }, 0);
        return total / this.nota.length;
    };
    return Estudante;
}());
var nota1 = parseFloat(teclado('Digite a nota 1: '));
var nota2 = parseFloat(teclado('Digite a nota 2: '));
var nota3 = parseFloat(teclado('Digite a nota 3: '));
var notas = new Float32Array([nota1, nota2, nota3]);
var estudante = new Estudante('Claudia', 16, notas, '501313');
var media = estudante.calcularMedia();
console.log("A m\u00E9dia das notas de ".concat(estudante.getNome(), " \u00E9: ").concat(media.toFixed(2)));
