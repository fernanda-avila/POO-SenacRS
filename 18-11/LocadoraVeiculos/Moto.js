"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Veiculos_1 = require("./Veiculos");
class Moto extends Veiculos_1.Veiculos {
    constructor(placa, modelo, marca, ano, valorLocacao, cilindradas, temBagageiro) {
        super(placa, modelo, marca, ano, valorLocacao);
        this.cilindradas = cilindradas;
        this.temBagageiro = temBagageiro;
    }
    getCilindradas() {
        return this.cilindradas;
    }
    setCilindradas(cilindradas) {
        this.cilindradas = cilindradas;
    }
    getTemBagageiro() {
        return this.temBagageiro;
    }
    setTemBagageiro(temBagageiro) {
        this.temBagageiro = temBagageiro;
    }
    ExibirInfo() {
        super.ExibirInfo();
        console.log(`Cilindradas: ${this.cilindradas}`);
        console.log(`Tem Bagageiro: ${this.temBagageiro}`);
    }
    calcularAutonomia(kmPorLitro, litros) {
        return kmPorLitro * litros;
    }
}
exports.Moto = Moto;
