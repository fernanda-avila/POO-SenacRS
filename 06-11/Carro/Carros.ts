class Carro{
    private marca: string;
    private modelo: string;
    private ano: number;
    private quilometragem: number;


    constructor(
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.quilometragem = quilometragem;
        }
        public getmarca(): string {
            return this.marca;
        }
   
        public setmarca(marca: string): void {
            this.marca = marca;
        }
        public getmodelo(): string {
            return this.modelo;
        }
   
        public setmodelo(modelo: string): void {
            this.modelo = modelo;
        }
        public getano(): number {
            return this.ano
        }
        public setano(ano: number): void{
            this.ano = ano;
        }
        public getquilometragem(): number {
            return this.quilometragem
        }
        public setquilometragem(quilometragem: number): void{
            this.quilometragem = quilometragem;
        }
        exibirInformacoes(): void {
            console.log(`Marca: ${this.marca}`);
            console.log(`Modelo: ${this.modelo}`);
            console.log(`Ano: ${this.ano}`);
            console.log(`Quilometragem: ${this.quilometragem}`)


         }
         public andar(distancia: number): void {
            this.quilometragem = this.quilometragem + distancia;
            console.log(`O carro andou ${distancia} km. Quilometragem atual: ${this.quilometragem} km.`);
}
}
const carro = new Carro("Ford", "Ka", 2001, 100000 )
carro.exibirInformacoes();
carro.andar(200);


