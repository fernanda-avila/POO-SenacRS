import {Pessoa} from "./Pessoa";

export class FuncionarioAdministrativo extends Pessoa {
    private salario: number;
    private setor: string;

    constructor(nome: string, cpf: string, endereco: string, estadoCivil: string, salario: number, setor: string)  {
        super(nome, cpf, endereco, estadoCivil); 
        this.salario = salario;
        this.setor = setor;

    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario:number) {
        return this.salario = salario
    }

    public getSetor(): string {
        return this.setor;
    }

    public setSetor(setor:string) {
        return this.setor = setor;
    }
}
