import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa {
    private turma: string;

    constructor(nome: string, cpf: string, endereco: string, estadoCivil: string, turma: string) {
        super(nome, cpf, endereco, estadoCivil); 
        this.turma = turma;
    }

  
    public getTurma(): string {
        return this.turma;
    }

  
    public setTurma(turma: string): void {
        this.turma = turma;
    }
}


