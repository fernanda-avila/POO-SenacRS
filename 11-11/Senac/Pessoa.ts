export class Pessoa {
    protected _nome: string;
    protected _cpf: string;
    protected _endereco: string;
    protected _estadoCivil: string;

    constructor(nome: string, cpf: string, endereco: string, estadoCivil: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._endereco = endereco;
        this._estadoCivil = estadoCivil;
    }

   
    public getNome(): string {
        return this._nome; 
    }

    public setNome(nome: string): void {
        this._nome = nome;
    }

    public getCPF(): string {
        return this._cpf;
    }

    public getEndereco(): string {
        return this._endereco;
    }

    public setEndereco(endereco: string): void {
        this._endereco = endereco;
    }

    public getEstadoCivil(): string {
        return this._estadoCivil;
    }

    public setEstadoCivil(estadoCivil: string): void {
        this._estadoCivil = estadoCivil;
    }
}
