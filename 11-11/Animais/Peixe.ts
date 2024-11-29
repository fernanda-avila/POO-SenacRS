import { AnimalBase } from "./AnimalBase";

export class Peixe extends AnimalBase {
    private escama: boolean;

    constructor(peso: number, idade: number, sexo: string, escama: boolean) {
        super(peso, idade, sexo);
        this.escama = escama;
    }

    public getEscama(): boolean {
        return this.escama;
    }

    public setEscama(escama: boolean): void {
        this.escama = escama;
    }
    

    public movimentar(): string {
        return "O peixe está nadando.";
    }
}
