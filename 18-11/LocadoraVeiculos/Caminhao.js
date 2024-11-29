"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = void 0;
const Veiculos_1 = require("./Veiculos");
class Caminhao extends Veiculos_1.Veiculos {
    constructor(placa, modelo, marca, ano, valorLocacao, capacidadeCarga, numeroEixos) {
        super(placa, modelo, marca, ano, valorLocacao);
        this.capacidadeCarga = capacidadeCarga;
        this.numeroEixos = numeroEixos;
    }
    getCapacidadeCarga() {
        return this.capacidadeCarga;
    }
    setCapacidadeCarga(capacidadeCarga) {
        this.capacidadeCarga = capacidadeCarga;
    }
    getNumeroEixos() {
        return this.numeroEixos;
    }
    setNumeroEixos(numeroEixos) {
        this.numeroEixos = numeroEixos;
    }
    ExibirInfo() {
        super.ExibirInfo();
        console.log(`Capacidade de Carga: ${this.capacidadeCarga}`);
        console.log(`Numero de Eixos: ${this.numeroEixos}`);
    }
    calcularValorSeguro(anosExperiencia) {
        const desconto = anosExperiencia * 10;
        const valorBaseSeguro = 1000;
        return valorBaseSeguro - desconto;
    }
}
exports.Caminhao = Caminhao;
