import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    private diaDeRendimento: number;

    constructor(nomeCliente: string, numeroConta: string, saldoInicial: number, diaDeRendimento: number) {
        super(nomeCliente, numeroConta, saldoInicial);
        this.diaDeRendimento = diaDeRendimento;
    }

    public calcularRendimento(taxa: number): void {
        if (taxa <= 0) {
            throw new Error("A taxa de rendimento deve ser positiva.");
        }
        this.saldo += this.saldo * taxa;
    }

    public getDiaDeRendimento(): number {
        return this.diaDeRendimento;
    }
}
