import { AnimalBase } from "./AnimalBase";

export class Gamba extends AnimalBase {
    private nivelAroma: number;

    constructor(peso: number, idade: number, sexo: string, nivelAroma: number) {
        super(peso, idade, sexo);
        this.nivelAroma = Math.min(Math.max(nivelAroma, 0), 10); // Limita o nível entre 0 e 10
    }
    

    public movimentar(): string {
        return "O gambá está caminhando lentamente.";
    }

    public aromatizar(): string {
        return `O gambá libera um aroma com intensidade de ${this.nivelAroma}.`;
    }

    public comer(): void {
        super.comer(5); 
    }

    public getNivelAroma(): number {
        return this.nivelAroma;
    }

    public setNivelAroma(nivelAroma: number): void {
        this.nivelAroma = Math.min(Math.max(nivelAroma, 0), 10);
    }
}
