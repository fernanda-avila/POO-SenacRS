import { Produto } from './Produto'

export class Eletronico extends Produto {
    private voltagem: number;

    constructor(nome:string, preco:number, qtdeEstoque:number, voltagem:number) {
        super(nome, preco, qtdeEstoque)
        this.voltagem = voltagem;
    }

    public getVoltagem(): number {
        return this.voltagem;
    }

    public setVoltagem(novaVoltagem:number) {
        novaVoltagem = this.voltagem;
    }

    public mostrarInfo(): void {
        super.mostrarInfo();
        console.log(this.voltagem)
    }
}

const produtoCelular = new Eletronico('Celular Samsung A13', 990.30, 9, 220)
const produtoMonitor = new Eletronico('Monitor DELL', 799, 31, 110)

produtoCelular.mostrarInfo();
produtoMonitor.mostrarInfo();

