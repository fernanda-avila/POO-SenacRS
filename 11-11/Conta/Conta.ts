export class Conta {
    protected nomeCliente: string;
    protected numeroConta: string;
    protected saldo: number;

    constructor(nomeCliente: string, numeroConta: string, saldoInicial: number) {
        this.nomeCliente = nomeCliente;
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser positivo.");
        }
        this.saldo += valor;
    }

    public sacar(valor: number): boolean {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return false;
        }
        this.saldo -= valor;
        return true;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public getNomeCliente(): string {
        return this.nomeCliente;
    }

    public getNumeroConta(): string {
        return this.numeroConta;
    }
}
