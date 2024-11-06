class Livro {
    public titulo:string;
    public autor: string;
    public anoPublicacao: number;
    private disponivel: boolean;


constructor(titulo: string, autor: string, anoPublicacao: number, disponivel: boolean ) {


     this.titulo = titulo;
     this.autor = autor;
     this.anoPublicacao = anoPublicacao;
     this.disponivel = disponivel;  


}


    public getTitulo():string{
        return this.titulo;
     }


    public getAutor():string{
        return this.autor;
     }


    public getanoPublicacao():number{
        return this.anoPublicacao;
     }
     
    private setDisponivel(disponivel: boolean): void {
        this.disponivel = disponivel;
     }  
   
     public emprestar(): void {
        if (this.disponivel) {
            this.setDisponivel(false);
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" não está disponível para empréstimo.`);
        }
    }
        public devolver(): void {
            if (!this.disponivel) {
                this.setDisponivel(true);
                console.log(`O livro "${this.titulo}" foi devolvido.`);
            } else {
                console.log(`O livro "${this.titulo}" já está disponível.`);
            }


    }




    public exibirInformacoes(): void {
        console.log(`titulo: ${this.titulo}, autor: ${this.autor}, anoPublicacao: ${this.anoPublicacao}, dsiponivel: ${this.disponivel}`);
}


}


const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
livro.exibirInformacoes();
livro.emprestar();
livro.devolver();


