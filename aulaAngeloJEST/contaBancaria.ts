import { DEPOSITO_INVALIDO, SALDO_INSUFICIENTE } from "../constantes";


export class contaBancaria{
    sacar(valor: number) {
        const ehSaldoInvalido = valor > this._saldo
        if(ehSaldoInvalido){
            throw new Error(SALDO_INSUFICIENTE)  
        }
        this._saldo -=valor;
    }
    depositar(valor: number) {
        if(valor <= 0) {
            throw new Error(DEPOSITO_INVALIDO)
        }
        this._saldo += valor;
    }
constructor() {
this._saldo = 0;
}

private _saldo: number;
public get saldo(){
return this._saldo;
}
}

