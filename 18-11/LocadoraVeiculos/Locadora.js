"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locadora = void 0;
const Caminhao_1 = require("./Caminhao");
const Carro_1 = require("./Carro");
const Moto_1 = require("./Moto");
class Locadora {
    constructor() {
        this.veiculos = [];
    }
    adicionarVeiculo(veiculo) {
        this.veiculos.push(veiculo);
    }
    removerVeiculo(placa) {
        this.veiculos = this.veiculos.filter(veiculo => veiculo.getPlaca() !== placa);
    }
    buscarVeiculoMarca(marca) {
        return this.veiculos.filter(veiculo => veiculo.getMarca() === marca);
    }
    exibirTodosOsVeiculos() {
        this.veiculos.forEach(veiculo => {
            veiculo.ExibirInfo();
        });
    }
}
exports.Locadora = Locadora;
const locadora = new Locadora();
// Adicionando veículos
// Carros
const carro1 = new Carro_1.Carro('ABC1234', 'Gol', 'Volkswagen', 2020, 100, 4, 'Flex');
const carro2 = new Carro_1.Carro('DEF5678', 'Civic', 'Honda', 2020, 150, 4, 'Flex');
const carro3 = new Carro_1.Carro('GHI9012', 'Corolla', 'Toyota', 2020, 200, 4, 'Flex');
const carro4 = new Carro_1.Carro('JKL3456', 'Onix', 'Chevrolet', 2020, 120, 4, 'Flex');
const carro5 = new Carro_1.Carro('MNO7890', 'HB20', 'Hyundai', 2020, 110, 4, 'Flex');
// Motos
const moto1 = new Moto_1.Moto('ABC1234', 'CG 125', 'Honda', 2020, 50, 125, false);
const moto2 = new Moto_1.Moto('DEF5678', 'CB 500', 'Honda', 2020, 100, 500, true);
const moto3 = new Moto_1.Moto('GHI9012', 'XRE 300', 'Honda', 2020, 150, 300, true);
const moto4 = new Moto_1.Moto('JKL3456', 'NMAX 160', 'Yamaha', 2020, 80, 160, true);
const moto5 = new Moto_1.Moto('MNO7890', 'BIZ 110', 'Honda', 2020, 70, 110, false);
// Caminhões
const caminhao1 = new Caminhao_1.Caminhao('ABC1234', 'FH 540', 'Volvo', 2020, 300, 50000, 6);
const caminhao2 = new Caminhao_1.Caminhao('DEF5678', 'Scania R 440', 'Scania', 2020, 350, 40000, 6);
const caminhao3 = new Caminhao_1.Caminhao('GHI9012', 'Axor 3344', 'Mercedes', 2020, 400, 45000, 6);
const caminhao4 = new Caminhao_1.Caminhao('JKL9704', 'FH 460', 'Volvo', 2020, 320, 45000, 6);
const caminhao5 = new Caminhao_1.Caminhao('MNO9584', 'Scania R 420', 'Scania', 2020, 340, 40000, 6);
// Adicionando veículos
locadora.adicionarVeiculo(carro1);
locadora.adicionarVeiculo(carro2);
locadora.adicionarVeiculo(carro3);
locadora.adicionarVeiculo(carro4);
locadora.adicionarVeiculo(carro5);
locadora.adicionarVeiculo(moto1);
locadora.adicionarVeiculo(moto2);
locadora.adicionarVeiculo(moto3);
locadora.adicionarVeiculo(moto4);
locadora.adicionarVeiculo(moto5);
locadora.adicionarVeiculo(caminhao1);
locadora.adicionarVeiculo(caminhao2);
locadora.adicionarVeiculo(caminhao3);
locadora.adicionarVeiculo(caminhao4);
locadora.adicionarVeiculo(caminhao5);
//demonstrando metodos
carro2.calcularValorDesconto(10);
moto3.calcularAutonomia(30, 10);
caminhao1.calcularValorSeguro(5);
// Mostrando todos os veiculos
locadora.exibirTodosOsVeiculos();
// Buscando veiculos por marca
console.log('Buscando veiculos por marca Honda');
locadora.buscarVeiculoMarca('Honda').forEach(veiculo => {
    veiculo.ExibirInfo();
});
// Removendo veiculo
locadora.removerVeiculo('DEF5678');
// Mostrando todos os veiculos
locadora.exibirTodosOsVeiculos();
