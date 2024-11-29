"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = require("./Conta");
class ContaPoupanca extends Conta_1.Conta {
    constructor(nomeCliente, numeroConta, saldoInicial, diaDeRendimento) {
        super(nomeCliente, numeroConta, saldoInicial);
        this.diaDeRendimento = diaDeRendimento;
    }
    calcularRendimento(taxa) {
        if (taxa <= 0) {
            throw new Error("A taxa de rendimento deve ser positiva.");
        }
        this.saldo += this.saldo * taxa;
    }
    getDiaDeRendimento() {
        return this.diaDeRendimento;
    }
}
exports.ContaPoupanca = ContaPoupanca;
