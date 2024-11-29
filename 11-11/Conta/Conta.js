"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(nomeCliente, numeroConta, saldoInicial) {
        this.nomeCliente = nomeCliente;
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser positivo.");
        }
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return false;
        }
        this.saldo -= valor;
        return true;
    }
    getSaldo() {
        return this.saldo;
    }
    getNomeCliente() {
        return this.nomeCliente;
    }
    getNumeroConta() {
        return this.numeroConta;
    }
}
exports.Conta = Conta;
