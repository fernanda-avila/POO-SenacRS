import { Peixe } from "./Peixe";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Gamba } from "./Gamba";

const peixe = new Peixe(2, 1, "M", true);
console.log(peixe.movimentar());
peixe.comer(5);
console.log(`Peso do peixe após comer: ${peixe.getPeso()} kg`);

const cachorro = new Cachorro(10, 3, "F", "Rex", true);
console.log(cachorro.movimentar());
console.log(cachorro.latir());
cachorro.comer();
console.log(`Peso do cachorro após comer: ${cachorro.getPeso()} kg`);

const gato = new Gato(5, 2, "M", "Mingau", false);
console.log(gato.movimentar());
console.log(gato.miar());
gato.comer();
console.log(`Peso do gato após comer: ${gato.getPeso()} kg`);

const gamba = new Gamba(4, 2, "M", 7);
console.log(gamba.movimentar());
console.log(gamba.aromatizar());
gamba.comer();
console.log(`Peso do gambá após comer: ${gamba.getPeso()} kg`);
