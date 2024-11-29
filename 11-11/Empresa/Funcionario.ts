import {Pessoa} from "./Pessoa";

export class Funcionario extends Pessoa {
    private cpf: string;
    private admissao: Date;
    private ultimoAcesso: Date;
    private inativo: boolean;

    constructor(_usuario: string, _senha: string,_nome: string, _status: string, cpf: string, admissao: Date, ultimoAcesso: Date, inativo: boolean) {
        super(_usuario, _senha, _nome, _status);
        this.cpf = cpf;
        this.admissao = admissao;
        this.ultimoAcesso = ultimoAcesso;
        this.inativo = inativo;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getAdmissao(): Date {
        return this.admissao;
    }

    public setAdmissao(admissao: Date): void {
        this.admissao = admissao;
    }

    public getUltimoAcesso(): Date {
        return this.ultimoAcesso;
    }

    public setUltimoAcesso(ultimoAcesso: Date): void {
        this.ultimoAcesso = ultimoAcesso;
    }

    public getInativo(): boolean {
        return this.inativo;
    }

    public setInativo(inativo: boolean): void {
        this.inativo = inativo;
    }

}