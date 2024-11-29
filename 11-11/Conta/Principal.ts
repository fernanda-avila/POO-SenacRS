import { ContaPoupanca } from "./contaPoupanca";
import { ContaEspecial } from "./contaEspecial";


const poupanca = new ContaPoupanca("João", "1234-5", 1000, 10);
console.log(`Saldo Poupança Inicial: ${poupanca.getSaldo()}`);
poupanca.calcularRendimento(0.05);
console.log(`Saldo Poupança após rendimento: ${poupanca.getSaldo()}`);


const contaEspecial = new ContaEspecial("Maria", "6789-0", 500, 1000);
console.log(`Saldo Conta Especial Inicial: ${contaEspecial.getSaldo()}`);
contaEspecial.sacar(1200);
console.log(`Saldo Conta Especial após saque: ${contaEspecial.getSaldo()}`);
contaEspecial.sacar(500); 
