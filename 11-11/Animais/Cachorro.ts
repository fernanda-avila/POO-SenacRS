import { AnimalBase } from "./AnimalBase";

export class Cachorro extends AnimalBase {
    private nome: string;
    private pedigree: boolean;

    constructor(peso: number, idade: number, sexo: string, nome: string, pedigree: boolean) {
        super(peso, idade, sexo);
        this.nome = nome;
        this.pedigree = pedigree;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }   

    getPedigree(): boolean {
        return this.pedigree;
    }

    setPedigree(pedigree: boolean): void {
        this.pedigree = pedigree;
    }
    

    public movimentar(): string {
        return "O cachorro está correndo.";
    }

    public latir(): string {
        return "O cachorro está latindo.";
    }

    public comer(): void {
        super.comer(10); 
    }
}
