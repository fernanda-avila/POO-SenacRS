import { Produto } from './Produto'
export class Alimento extends Produto {
    private dataValidade: string;

    constructor(nome:string, preco:number, qtdeEstoque: number, dataValidade:string) {
        super(nome, preco, qtdeEstoque);
        this.dataValidade = dataValidade;
    }

    public getValidade(): string {
        return this.dataValidade;
    }

   public mostrarInfo(): void {
       super.mostrarInfo();
       console.log(`${this.dataValidade}`)
   }
}

const produtoBolachinha = new Alimento('Bolacha Trakinas Morango', 2.39, 36, '07/11/2026')
const produtoSucoKapo = new Alimento('Suco Kapo Uva', 2.39, 22, '15/02/2028')

produtoBolachinha.mostrarInfo();