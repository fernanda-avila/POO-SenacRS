export class Produto {
    private nome: string;
    private preco: number; 
    private qtdeEstoque: number;

    constructor(nome: string, preco: number, qtdeEstoque: number) { 
        this.nome = nome;
        this.preco = preco;
        this.qtdeEstoque = qtdeEstoque;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(novoNome: string): void {
        if (novoNome.length === 0) {
            console.log("Nome inválido.");
        } else {
            this.nome = novoNome;
        }
    }

    public getPreco(): number { 
        return this.preco;
    }

    public setPreco(novoPreco: number): void { 
        this.preco = novoPreco;
    }

    public getEstoque(): number {
        return this.qtdeEstoque;
    }

    public setEstoque(novoEstoque: number): void {
        this.qtdeEstoque = novoEstoque;
    }

    public mostrarInfo(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.preco}`); 
        console.log(`Quantidade em estoque: ${this.qtdeEstoque}`);
    }

    
}

const produtoNotebook = new Produto('Notebook ASUS', 4999, 5);
const produtoFone = new Produto('Fone de ouvido JBL', 299, 2);



produtoFone.setEstoque(10);
produtoFone.mostrarInfo();

produtoNotebook.setEstoque(15);
produtoNotebook.mostrarInfo();