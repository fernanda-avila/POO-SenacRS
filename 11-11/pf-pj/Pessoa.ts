export class Pessoa{
    public nome: string;
    public idade: number;


   
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    public getNome() {
        return this.nome;
    }




    public setNome(nome: string): void {
        this.nome = nome;
    }




    public getIdade() {
        return this.idade;
    }




    public setIdade(idade: number): void {
        this.idade = idade;
    }
}
