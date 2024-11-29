class Cliente {
    private nome: string;
    private cpf: string;
    private dataNasc: Date;
    private qtdDin: number;

    constructor(nome: string, cpf: string, dataNasc: Date, qtdDin: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.qtdDin = qtdDin;
    }

 
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCPF(): string {
        return this.cpf;
    }

    public setCPF(cpf: string): void {
        this.cpf = cpf;
    }

    public getDataNasc(): Date {
        return this.dataNasc;
    }

    public getQtdDin(): number {
        return this.qtdDin;
    }

    public setQtdDin(qtdDin: number): void {
        this.qtdDin = qtdDin;
    }

 
    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cpf: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNasc.toLocaleDateString()}`);
        console.log(`Quantia em dinheiro: R$ ${this.qtdDin}`);
    }

    public temDinheiroSuficiente(valorCompra: number): boolean {
        return this.qtdDin >= valorCompra;
    }
}


const cliente = new Cliente("Fernanda", "123456789-0", new Date(1997, 11, 12), 100);


cliente.exibirInformacoes();


const valorCompra = 75;
if (cliente.temDinheiroSuficiente(valorCompra)) {
    console.log(`O cliente pode realizar a compra de R$ ${valorCompra}.`);
} else {
    console.log(`O cliente não tem dinheiro suficiente para a compra de R$ ${valorCompra}.`);
}