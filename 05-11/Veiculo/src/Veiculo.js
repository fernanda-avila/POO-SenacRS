"use strict";
class Veiculo {
    constructor(modelo, ano, potencia, numeroMarchas, velocidadeAtual, marchaAtual) {
        this.modelo = modelo;
        this.ano = ano;
        this.potencia = potencia;
        this.numeroMarchas = numeroMarchas;
        this.velocidadeAtual = velocidadeAtual;
        this.marchaAtual = marchaAtual;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getPotencia() {
        return this.potencia;
    }
    setPotencia(podentia) {
    }
    exibirInformacoes() {
        console.log(`modelo: ${this.modelo}, ano: ${this.ano}, potencia: ${this.potencia}`);
    }
}
const veiculo = new Veiculo("peugeot", 2009, "158cv", 6, "20km", 3);
veiculo.exibirInformacoes();
