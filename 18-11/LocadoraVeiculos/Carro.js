"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculos_1 = require("./Veiculos");
class Carro extends Veiculos_1.Veiculos {
    constructor(placa, modelo, marca, ano, valorLocacao, numeroPortas, tipoCombustivel) {
        super(placa, modelo, marca, ano, valorLocacao);
        this.numeroPortas = numeroPortas;
        this.tipoCOmbustivel = tipoCombustivel;
    }
    getNumeroPortas() {
        return this.numeroPortas;
    }
    setNumeroPortas(numeroPortas) {
        this.numeroPortas = numeroPortas;
    }
    getTipoCombustivel() {
        return this.tipoCOmbustivel;
    }
    setTipoCombustivel(tipoCombustivel) {
        this.tipoCOmbustivel = tipoCombustivel;
    }
    ExibirInfo() {
        super.ExibirInfo();
        console.log(`Numero de Portas: ${this.numeroPortas}`);
        console.log(`Tipo de Combustivel: ${this.tipoCOmbustivel}`);
    }
    calcularValorDesconto(desconto) {
        return this.getValor() - (this.getValor() * desconto / 100);
    }
}
exports.Carro = Carro;
