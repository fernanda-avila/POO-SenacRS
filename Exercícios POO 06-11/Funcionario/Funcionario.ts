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
        if (salario <= 0) {
            console.error("Erro: o salário deve ser maior que zero.");
            return;
        }
        this.salario = salario;
    }

    public getCPF(): string {
        return this.cpf;
    }

    public setCPF(cpf: string): void {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            console.error("Erro: o CPF informado é inválido. O formato deve ser 000.000.000-00.");
            return;
        }
        this.cpf = cpf;
    }

    public exibirInformacoes(): void {
        console.log(`
Informações do Funcionário:
---------------------------------------
Nome: ${this.nome}
Salário: R$ ${this.salario.toFixed(2)}
CPF: ${this.cpf}
---------------------------------------
        `);
    }

    public exibirInformacoesAtualizadas(): void {
        console.log(`
Informações Atualizadas do Funcionário:
---------------------------------------
Nome: ${this.nome}
Salário: R$ ${this.salario.toFixed(2)}
CPF: ${this.cpf}
---------------------------------------
        `);
    }

    public aumentarSalario(percentual: number): void {
        if (percentual <= 0) {
            console.error("Erro: o  aumento deve ser maior que zero.");
            return;
        }
        this.salario += this.salario * (percentual / 100);
        console.log(`
Aumento de Salário Concedido:
---------------------------------------
Percentual de Aumento: ${percentual}%
Novo Salário: R$ ${this.salario.toFixed(2)}
---------------------------------------
        `);
    }
}


const funcionario = new Funcionario("João", 3000, "123.456.789-00");

funcionario.exibirInformacoes();

funcionario.aumentarSalario(10);

funcionario.exibirInformacoesAtualizadas();
