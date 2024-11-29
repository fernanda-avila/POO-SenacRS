import { Mago } from './Mago';
import { Guerreiro } from './Guerreiro';
import { Arqueiro } from './Arqueiro';
import { Assassino } from './Assassino';
import { Paladino } from './Paladino';

export class RPG {
    guerreiros: Guerreiro[] = [];
    magos: Mago[] = [];
    arqueiros: Arqueiro[] = [];
    assassinos: Assassino[] = [];
    paladinos: Paladino[] = [];

    constructor() {
        this.criarPersonagens();
        this.simularAtaques();
    }

    // Criando personagens
    criarPersonagens(): void {
        this.guerreiros.push(new Guerreiro('Thorne'), new Guerreiro('Ragnar'), new Guerreiro('Aegon'), new Guerreiro('Brom'), new Guerreiro('Valkor'),
            new Guerreiro('Gorath'), new Guerreiro('Ulfar'), new Guerreiro('Haldor'), new Guerreiro('Fjor'), new Guerreiro('Karn'));

        this.magos.push(new Mago('Zephyros'), new Mago('Nyxen'), new Mago('Azura'), new Mago('Drakos'), new Mago('Selene'),
            new Mago('Virel'), new Mago('Lunara'), new Mago('Eldrin'), new Mago('Xarath'), new Mago('Ilios'));

        this.arqueiros.push(new Arqueiro('Valen'), new Arqueiro('Sylas'), new Arqueiro('Thalindra'), new Arqueiro('Lyria'), new Arqueiro('Kaelen'),
            new Arqueiro('Dorian'), new Arqueiro('Ariella'), new Arqueiro('Fennix'), new Arqueiro('Eldra'), new Arqueiro('Ysolde'));

        this.assassinos.push(new Assassino('Kuro'), new Assassino('Zarek'), new Assassino('Nyx'), new Assassino('Sable'), new Assassino('Vex'),
            new Assassino('Raven'), new Assassino('Jin'), new Assassino('Draxis'), new Assassino('Oren'), new Assassino('Fira'));

        this.paladinos.push(new Paladino('Aurelius'), new Paladino('Gideon'), new Paladino('Seraphim'), new Paladino('Theron'), new Paladino('Liora'),
            new Paladino('Ezekiel'), new Paladino('Solomon'), new Paladino('Valkyria'), new Paladino('Talia'), new Paladino('Adriel'));
    }

    // Ataques de cada personagem

    // Ataques de Guerreiros
    simularAtaques(): void {
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


const rpg = new RPG();
