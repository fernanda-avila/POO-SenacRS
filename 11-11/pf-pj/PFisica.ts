import {Pessoa} from "./Pessoa"
export class PFisica extends Pessoa{
    private cpf: string;
    private cnh: string;


    constructor(nome: string,
             idade: number,
             cpf: string,
             cnh:string){
        super(nome,idade)
        this.cpf = cpf;
        this.cnh = cnh;
    }
    public getcpf(): string {
        return this.cpf;
    }




    public setcpf(cpf: string): void {
        this.cpf = cpf;
    }
    public getCcnh(): string {
        return this.cnh;
    }




    public setcnh(cnh: string): void {
        this.cnh = cnh;
    }
}
