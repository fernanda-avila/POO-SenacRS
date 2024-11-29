import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
    private cpf: string;
    private ultimoAcesso: Date;

    constructor( _usuario: string, _senha: string,_nome: string, _status: string, cpf: string, ultimoAcesso: Date) {
        super(_usuario, _senha, _nome, _status);
        this.cpf = cpf;
        this.ultimoAcesso = ultimoAcesso;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getUltimoAcesso(): Date {
        return this.ultimoAcesso;
    }

    public setUltimoAcesso(ultimoAcesso: Date): void {
        this.ultimoAcesso = ultimoAcesso;
    }
}