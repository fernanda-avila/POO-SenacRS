import { Produto } from './Produto';
import { Eletronico } from './Eletronico';
import { Alimento } from './Alimento';

class Loja {
    private produtos: Produto[] = [];

    
    public adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
        console.log(`O produto "${produto.getNome()}" adicionado!`);
    }

    public removerProduto(nomeProduto: string): void {
        const index = this.produtos.findIndex(produto => produto.getNome() === nomeProduto);
        
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto "${nomeProduto}" removido!`);
        } else {
            console.log(`Produto "${nomeProduto}" não encontrado.`);
        }
    }

    public mostrarProdutos(): void {
        if (this.produtos.length > 0) {
            console.log("Produtos na loja:");
            this.produtos.forEach(produto => produto.mostrarInfo());
        } else {
            console.log("Nenhum produto na loja.");
        }
    }
}

// Criando produtos

// Eletronico
const produtoTeclado = new Eletronico('Teclado Lenovo', 79.90, 47, 220);
const produtoTV = new Eletronico('Televisao Samsung 32 polegadas', 1099.90, 7, 110);
const produtoMouse = new Eletronico('Mouse Logitech', 59.90, 30, 110);
const produtoMonitor = new Eletronico('Monitor Dell 24 polegadas', 849.90, 15, 220);
const produtoNotebook = new Eletronico('Notebook Acer', 3499.00, 5, 110);
const produtoImpressora = new Eletronico('Impressora HP', 499.90, 12, 220);
const produtoSmartphone = new Eletronico('Smartphone iPhone 13', 6999.00, 8, 110);


// Alimento
const produtoMacarrao = new Alimento('Nissim Miojo', 1.50, 50, '01/12/2024');
const produtoArroz = new Alimento('Arroz Branco', 4.99, 100, '15/03/2025');
const produtoFeijao = new Alimento('Feijão Preto', 6.99, 80, '10/08/2025');
const produtoLeite = new Alimento('Leite Integral', 3.99, 25, '20/01/2024');
const produtoCereal = new Alimento('Nescau Cereal', 9.99, 40, '18/09/2026');
const produtoSucoLaranja = new Alimento('Suco de Laranja Concentrado', 3.99, 60, '25/07/2025');
const produtoBiscoito = new Alimento('Biscoito Zezé', 7.99, 120, '12/06/2026');

// Produto
const produtoCadeira = new Produto('Cadeira de Escritório', 249.90, 15);
const produtoCamisa = new Produto('Camisa Polo Masculina', 59.90, 50);
const produtoLivro = new Produto('Livro de Programação', 49.90, 30);
const produtoFoneBluetooth = new Produto('Fone Bluetooth Sony', 199.90, 20);
const produtoRelogio = new Produto('Relógio de Pulso Casio', 129.90, 25);

// Criando a loja
const loja = new Loja();

// Adicionando à loja
loja.adicionarProduto(produtoTeclado);
loja.adicionarProduto(produtoTV);
loja.adicionarProduto(produtoMacarrao);
loja.adicionarProduto(produtoCadeira);
loja.adicionarProduto(produtoLivro);

// Removendo produto
loja.removerProduto('Cadeira de Escritório');
loja.removerProduto('Produto Inexistente'); 

// Exibindo os produtos na loja após adicionar/remover
loja.mostrarProdutos();
