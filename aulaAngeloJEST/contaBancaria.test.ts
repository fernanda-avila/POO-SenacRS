import { DEPOSITO_INVALIDO } from "../constantes";
import { contaBancaria } from "./contaBancaria";

describe("Quando Depositar", () => {

it("Deve ser possível realizar um depósito", () => {
const conta: contaBancaria = new contaBancaria();
conta.saldo;
conta.depositar(100);
expect(conta.saldo).toBe(100);

})

it("Não deve ser possível depositar um valor negativo", () => {
const conta: contaBancaria = new contaBancaria();

expect(() => conta.depositar(-100)).toThrow(DEPOSITO_INVALIDO);
})


})

describe("Quando Sacar", () => {
    it("Deve subtrair o valor do saque do saldo", () => {
        const conta = new contaBancaria();
        conta.depositar(1000);

        conta.sacar(200);

        expect(conta.saldo).toBe(800)
    })

    it("Não deve ser possível sacar um valor maior do que o saldo", () => {
        const conta: contaBancaria = new contaBancaria
        conta.depositar(100);

        expect (() => conta.sacar(200)).toThrow()
    })
})

