import {Pessoa} from "./Pessoa"
export class FuncionarioProfessor extends Pessoa {
    private salario: number;
    private titulacao: string;

    constructor(nome: string, cpf: string, endereco: string, estadoCivil: string, salario: number, setor: string, titulacao: string)  {
        super(nome, cpf, endereco, estadoCivil)
        this.salario = salario;
        this.titulacao = titulacao;

    }


   public getSalario(): number {
    return this.salario;
   }

   public setSalario(salario:number) {
    return this.salario = salario
   }

   public getSetor(): string {
    return this.titulacao;
   }

   public setSetor(setor:string) {
    return this.titulacao = setor;
   }
}
