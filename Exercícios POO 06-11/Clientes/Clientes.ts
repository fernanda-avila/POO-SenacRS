class Clientes {


    private Nome: string;
    private Telefone: number;
    private Email: string;


    constructor (nome:string, telefone:number, email:string){  
        this.Nome = nome;
        this.Telefone = telefone;
        this.Email = email;




    }


    public getNome() {
        return this.Nome;
    }
    public setNome(nome:string): void {
        this.Nome = nome;


    }
    public getTelefone () {
        return this.Telefone;
    }
    public setTelefone(telefone:number):void{
        this.Telefone = telefone;
    }
    public getEmail () {
        return this.Email;
    }
    public setEmail(email:string): void {
        this.Email = email;
    }


    public ExibirInformaçoes () : void {
        console.log(`Nome: ${this.Nome}`)
        console.log(`Telefone: ${this.Telefone}`)
        console.log(`Email: ${this.Email}`)


    }
   
}
const clientee = new Clientes ("Fernanda", 553991968011,"avilafernandaa@gmail.com")


clientee.ExibirInformaçoes()


clientee.setTelefone(53984288148)
clientee.setEmail("fernandavila987@gmail.com")

console.log("\n Informações atualizadas")


clientee.ExibirInformaçoes()


