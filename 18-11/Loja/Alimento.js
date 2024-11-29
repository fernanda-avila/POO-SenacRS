"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
const Produto_1 = require("./Produto");
class Alimento extends Produto_1.Produto {
    constructor(nome, preco, qtdeEstoque, dataValidade) {
        super(nome, preco, qtdeEstoque);
        this.dataValidade = dataValidade;
    }
    getValidade() {
        return this.dataValidade;
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`${this.dataValidade}`);
    }
}
exports.Alimento = Alimento;
const produtoBolachinha = new Alimento('Bolacha Trakinas Morango', 2.39, 36, '07/11/2026');
const produtoSucoKapo = new Alimento('Suco Kapo Uva', 2.39, 22, '15/02/2028');
produtoBolachinha.mostrarInfo();
