"use strict";
class Carro {
    constructor(marca, modelo, ano, quilometragem) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }
    getmarca() {
        return this.marca;
    }
    setmarca(marca) {
        this.marca = marca;
    }
    getmodelo() {
        return this.modelo;
    }
    setmodelo(modelo) {
        this.modelo = modelo;
    }
    getano() {
        return this.ano;
    }
    setano(ano) {
        this.ano = ano;
    }
    getquilometragem() {
        return this.quilometragem;
    }
    setquilometragem(quilometragem) {
        this.quilometragem = quilometragem;
    }
    exibirInformacoes() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Quilometragem: ${this.quilometragem}`);
    }
    andar(distancia) {
        this.quilometragem = this.quilometragem + distancia;
        console.log(`O carro andou ${distancia} km. Quilometragem atual: ${this.quilometragem} km.`);
    }
}
const carro = new Carro("Ford", "Ka", 2001, 100000);
carro.exibirInformacoes();
carro.andar(200);
