class Funcionario {
    private nome: string;
    private salario: number;
    private cpf: string;

    constructor(nome: string, salario: number, cpf: string) {
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public getCPF(): string {
        return this.cpf;
    }

    public setCPF(cpf: string): void {
        this.cpf = cpf;
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Salário: ${this.salario.toFixed(2)}, CPF: ${this.cpf}`);
    }

    public exibirInformacoesAtualizadas(): void {
        console.log(`INFORMAÇÕES ATUALIZADAS: Nome: ${this.nome}, Salário: ${this.salario.toFixed(2)}, CPF: ${this.cpf}`);
    }

    public aumentarSalario(percentual: number): void {
        this.salario += this.salario * (percentual / 100);
        console.log(`Novo salário após aumento de ${percentual}%: ${this.salario}`); 
    }
}



const funcionario = new Funcionario("João", 3000, "123.456.789-00");

funcionario.exibirInformacoes(); 

funcionario.aumentarSalario(10);

funcionario.exibirInformacoesAtualizadas();
