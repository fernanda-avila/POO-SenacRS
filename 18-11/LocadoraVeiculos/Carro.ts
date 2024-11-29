import {Veiculos} from './Veiculos';
export class Carro extends Veiculos {
   private numeroPortas: number;
   private tipoCOmbustivel: string;

    constructor(placa: string, modelo: string, marca: string, ano: number, valorLocacao: number, numeroPortas: number, tipoCombustivel: string) {
        super(placa, modelo, marca, ano, valorLocacao);
        this.numeroPortas = numeroPortas;
        this.tipoCOmbustivel = tipoCombustivel;

    }

    public getNumeroPortas(): number {
        return this.numeroPortas;
    }   

    public setNumeroPortas(numeroPortas: number): void {
        this.numeroPortas = numeroPortas;
    }

    public getTipoCombustivel(): string {
        return this.tipoCOmbustivel;
    }

    public setTipoCombustivel(tipoCombustivel: string): void {
        this.tipoCOmbustivel = tipoCombustivel;
    }

    public ExibirInfo(): void {
        super.ExibirInfo();
        console.log(`Numero de Portas: ${this.numeroPortas}`);
        console.log(`Tipo de Combustivel: ${this.tipoCOmbustivel}`);
    }

    public calcularValorDesconto(desconto: number): number {
        return this.getValor() - (this.getValor() * desconto / 100);
    }

}