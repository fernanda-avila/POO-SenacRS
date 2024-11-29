import { Conta } from "./Conta";

export class ContaEspecial extends Conta {
    private limite: number;

    constructor(nomeCliente: string, numeroConta: string, saldoInicial: number, limite: number) {
        super(nomeCliente, numeroConta, saldoInicial);
        this.limite = limite;
    }

    public sacar(valor: number): boolean {
        if (valor > this.saldo + this.limite) {
            console.log("Saldo e limite insuficientes.");
            return false;
        }
        this.saldo -= valor;
        return true;
    }

    public getLimite(): number {
        return this.limite;
    }

    public setLimite(limite: number): void {
        this.limite = limite;
    }
}
