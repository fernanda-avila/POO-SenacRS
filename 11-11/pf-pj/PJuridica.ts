import {Pessoa} from "./Pessoa"
export class PJuridica extends Pessoa{
    private cnpj: string;
    private razaoSocial: string;


    constructor(nome: string,
        idade: number,
        cnpj: string,
        razaoSocial: string,
    ){
        super(nome, idade)
        this.cnpj = cnpj
        this.razaoSocial = razaoSocial
    }
    public getcnpj(): string {
        return this.cnpj;
    }




    public setcnpj(cnpj: string): void {
        this.cnpj = cnpj;
    }
    public getrazaoSocial(): string {
        return this.razaoSocial;
    }




    public setrazaoSocial(razaoSocial: string): void {
        this.razaoSocial = razaoSocial;
    }
}
