export class Veiculos {
    private placa: string;
    private modelo: string;
    private marca: string;
    private ano: number;
    private valorLocacao: number;

    constructor(placa: string, modelo: string, marca: string, ano: number, valorLocacao: number) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.valorLocacao = valorLocacao;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setPlaca(placa: string): void {
        this.placa = placa;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getAno(): number {
        return this.ano;
    }

    public setAno(ano: number): void {
        this.ano = ano;
    }


    public getValor(): number {
        return this.valorLocacao;
    }

    public setValor(valor: number): void {
        this.valorLocacao = valor;
    }

    public ExibirInfo(): void {
        console.log(`Placa: ${this.placa}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Valor Locação: ${this.valorLocacao}`);
    }
}