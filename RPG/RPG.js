"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPG = void 0;
const Mago_1 = require("./Mago");
const Guerreiro_1 = require("./Guerreiro");
const Arqueiro_1 = require("./Arqueiro");
const Assassino_1 = require("./Assassino");
const Paladino_1 = require("./Paladino");
class RPG {
    constructor() {
        this.guerreiros = [];
        this.magos = [];
        this.arqueiros = [];
        this.assassinos = [];
        this.paladinos = [];
        this.criarPersonagens();
        this.simularAtaques();
    }
    // Criando personagens
    criarPersonagens() {
        this.guerreiros.push(new Guerreiro_1.Guerreiro('Thorne'), new Guerreiro_1.Guerreiro('Ragnar'), new Guerreiro_1.Guerreiro('Aegon'), new Guerreiro_1.Guerreiro('Brom'), new Guerreiro_1.Guerreiro('Valkor'), new Guerreiro_1.Guerreiro('Gorath'), new Guerreiro_1.Guerreiro('Ulfar'), new Guerreiro_1.Guerreiro('Haldor'), new Guerreiro_1.Guerreiro('Fjor'), new Guerreiro_1.Guerreiro('Karn'));
        this.magos.push(new Mago_1.Mago('Zephyros'), new Mago_1.Mago('Nyxen'), new Mago_1.Mago('Azura'), new Mago_1.Mago('Drakos'), new Mago_1.Mago('Selene'), new Mago_1.Mago('Virel'), new Mago_1.Mago('Lunara'), new Mago_1.Mago('Eldrin'), new Mago_1.Mago('Xarath'), new Mago_1.Mago('Ilios'));
        this.arqueiros.push(new Arqueiro_1.Arqueiro('Valen'), new Arqueiro_1.Arqueiro('Sylas'), new Arqueiro_1.Arqueiro('Thalindra'), new Arqueiro_1.Arqueiro('Lyria'), new Arqueiro_1.Arqueiro('Kaelen'), new Arqueiro_1.Arqueiro('Dorian'), new Arqueiro_1.Arqueiro('Ariella'), new Arqueiro_1.Arqueiro('Fennix'), new Arqueiro_1.Arqueiro('Eldra'), new Arqueiro_1.Arqueiro('Ysolde'));
        this.assassinos.push(new Assassino_1.Assassino('Kuro'), new Assassino_1.Assassino('Zarek'), new Assassino_1.Assassino('Nyx'), new Assassino_1.Assassino('Sable'), new Assassino_1.Assassino('Vex'), new Assassino_1.Assassino('Raven'), new Assassino_1.Assassino('Jin'), new Assassino_1.Assassino('Draxis'), new Assassino_1.Assassino('Oren'), new Assassino_1.Assassino('Fira'));
        this.paladinos.push(new Paladino_1.Paladino('Aurelius'), new Paladino_1.Paladino('Gideon'), new Paladino_1.Paladino('Seraphim'), new Paladino_1.Paladino('Theron'), new Paladino_1.Paladino('Liora'), new Paladino_1.Paladino('Ezekiel'), new Paladino_1.Paladino('Solomon'), new Paladino_1.Paladino('Valkyria'), new Paladino_1.Paladino('Talia'), new Paladino_1.Paladino('Adriel'));
    }
    // Ataques de cada personagem
    // Ataques de Guerreiros
    simularAtaques() {
        console.log("Ataques dos Guerreiros");
        this.guerreiros.forEach((guerreiro, index) => {
            guerreiro.atacar(this.guerreiros[(index + 1) % 10]);
        });
        // Ataques de Magos
        console.log("Ataques de Magos");
        this.magos.forEach((mago, index) => {
            mago.atacar(this.magos[(index + 1) % 10]);
            mago.drenagemVital(this.magos[(index + 1) % 10]);
            mago.curaDivina(this.magos[(index + 1) % 10]);
        });
        // Ataques de Arqueiros
        console.log("Ataques de Arqueiros");
        this.arqueiros.forEach((arqueiro, index) => {
            arqueiro.atacar(this.arqueiros[(index + 1) % 10]);
            arqueiro.tiroCerteiro(this.arqueiros[(index + 1) % 10]);
        });
        // Ataques de Assassinos
        console.log("Ataques de Assassinos");
        this.assassinos.forEach((assassino, index) => {
            assassino.atacar(this.assassinos[(index + 1) % 10]);
            assassino.ataqueSombrio(this.assassinos[(index + 1) % 10]);
        });
        // Ataques de Paladinos
        console.log("Ataques de Paladinos");
        this.paladinos.forEach((paladino, index) => {
            paladino.atacar(this.paladinos[(index + 1) % 10]);
            paladino.bençãoDivina();
        });
    }
}
exports.RPG = RPG;
const rpg = new RPG();
