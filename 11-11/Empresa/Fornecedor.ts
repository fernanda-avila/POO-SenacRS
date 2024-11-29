import {Pessoa} from "./Pessoa";

export class Fornecedor extends Pessoa {
private cnpj: string;
private inativo: boolean;

constructor(_usuario: string, _senha: string,_nome: string, _status: string, cnpj: string, inativo: boolean) {
    super(_usuario, _senha, _nome, _status);
    this.cnpj = cnpj;
    this.inativo = inativo;
}

public getCnpj(): string {
    return this.cnpj;
}

public setCnpj(cnpj: string): void {
    this.cnpj = cnpj;
}

public getInativo(): boolean {
    return this.inativo;
}

public setInativo (inativo: boolean): void {
    this.inativo = inativo;
}

}