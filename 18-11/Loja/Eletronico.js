"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
const Produto_1 = require("./Produto");
class Eletronico extends Produto_1.Produto {
    constructor(nome, preco, qtdeEstoque, voltagem) {
        super(nome, preco, qtdeEstoque);
        this.voltagem = voltagem;
    }
    getVoltagem() {
        return this.voltagem;
    }
    setVoltagem(novaVoltagem) {
        novaVoltagem = this.voltagem;
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(this.voltagem);
    }
}
exports.Eletronico = Eletronico;
const produtoCelular = new Eletronico('Celular Samsung A13', 990.30, 9, 220);
const produtoMonitor = new Eletronico('Monitor DELL', 799, 31, 110);
produtoCelular.mostrarInfo();
produtoMonitor.mostrarInfo();
