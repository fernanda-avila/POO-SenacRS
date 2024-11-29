import {Veiculos} from './Veiculos';

export class Caminhao extends Veiculos {
private capacidadeCarga: number;
private numeroEixos: number;

constructor(placa: string, modelo: string, marca: string, ano: number, valorLocacao: number, capacidadeCarga: number, numeroEixos: number) {
    super(placa, modelo, marca, ano, valorLocacao);
    this.capacidadeCarga = capacidadeCarga;
    this.numeroEixos = numeroEixos;
}

public getCapacidadeCarga(): number {
    return this.capacidadeCarga;
}

public setCapacidadeCarga(capacidadeCarga: number): void {
    this.capacidadeCarga = capacidadeCarga;
}

public getNumeroEixos(): number {
    return this.numeroEixos;
}

public setNumeroEixos(numeroEixos: number): void {
    this.numeroEixos = numeroEixos;
}

public ExibirInfo(): void {
    super.ExibirInfo();
    console.log(`Capacidade de Carga: ${this.capacidadeCarga}`);
    console.log(`Numero de Eixos: ${this.numeroEixos}`);
}


public calcularValorSeguro(anosExperiencia: number): number {
    const desconto = anosExperiencia * 10;
    const valorBaseSeguro = 1000;
    return valorBaseSeguro - desconto;
}

}