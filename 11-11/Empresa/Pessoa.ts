export class Pessoa {
    protected _usuario: string;
    protected _senha: string;
    protected _nome: string;
    protected _status: string;

    constructor(usuario: string, senha: string, nome: string, status: string) {
        this._usuario = usuario;
        this._senha = senha;
        this._nome = nome;
        this._status = status;
    }

    public getUsuario(): string {
        return this._usuario;
    }

    public setUsuario(usuario: string): void {
        this._usuario = usuario;
    }

    public getSenha(): string {
        return this._senha;
    }

    public setSenha(senha: string): void {
        this._senha = senha;
    }

    public getNome(): string {
        return this._nome;
    }

    public setNome(nome: string): void {
        this._nome = nome;
    }

    public getStatus(): string {
        return this._status;
    }   

    public setStatus(status: string): void {
        this._status = status;
    }

    
}
