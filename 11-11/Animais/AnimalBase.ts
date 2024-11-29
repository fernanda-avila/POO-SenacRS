export abstract class AnimalBase {
    protected peso: number;
    protected idade: number;
    protected sexo: string;

    constructor(peso: number, idade: number, sexo: string) {
        this.peso = peso;
        this.idade = idade;
        this.sexo = sexo;
    }

    public abstract movimentar(): string;

    public comer(percentualAumentoPeso: number): void {
        this.peso += this.peso * percentualAumentoPeso / 100;
    }

    public envelhecer(): void {
        this.idade += 1;
    }

    public getPeso(): number {
        return this.peso;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getSexo(): string {
        return this.sexo;
    }
}
