import {Veiculos} from './Veiculos';

export class Moto extends Veiculos {
    private cilindradas: number;
    private temBagageiro: boolean;

    constructor(placa: string, modelo: string, marca: string, ano: number, valorLocacao: number, cilindradas: number, temBagageiro: boolean) {
        super(placa, modelo, marca, ano, valorLocacao);
        this.cilindradas = cilindradas;
        this.temBagageiro = temBagageiro;
    }

    public getCilindradas(): number {
        return this.cilindradas;
    }

    public setCilindradas(cilindradas: number): void {
        this.cilindradas = cilindradas;
    }

    public getTemBagageiro(): boolean {
        return this.temBagageiro;
    }

    public setTemBagageiro(temBagageiro: boolean): void {
        this.temBagageiro = temBagageiro;
    }

    public ExibirInfo(): void {
        super.ExibirInfo();
        console.log(`Cilindradas: ${this.cilindradas}`);
        console.log(`Tem Bagageiro: ${this.temBagageiro}`);
    }

    public calcularAutonomia(kmPorLitro: number, litros: number): number {
        return kmPorLitro * litros;
    }
}