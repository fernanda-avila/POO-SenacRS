"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculos = void 0;
class Veiculos {
    constructor(placa, modelo, marca, ano, valorLocacao) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.valorLocacao = valorLocacao;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getValor() {
        return this.valorLocacao;
    }
    setValor(valor) {
        this.valorLocacao = valor;
    }
    ExibirInfo() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Valor Locação: ${this.valorLocacao}`);
    }
}
exports.Veiculos = Veiculos;
