"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaEspecial = void 0;
const Conta_1 = require("./Conta");
class ContaEspecial extends Conta_1.Conta {
    constructor(nomeCliente, numeroConta, saldoInicial, limite) {
        super(nomeCliente, numeroConta, saldoInicial);
        this.limite = limite;
    }
    sacar(valor) {
        if (valor > this.saldo + this.limite) {
            console.log("Saldo e limite insuficientes.");
            return false;
        }
        this.saldo -= valor;
        return true;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(limite) {
        this.limite = limite;
    }
}
exports.ContaEspecial = ContaEspecial;
