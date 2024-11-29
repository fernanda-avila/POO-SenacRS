"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./Produto");
const Eletronico_1 = require("./Eletronico");
const Alimento_1 = require("./Alimento");
class Loja {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log(`O produto "${produto.getNome()}" adicionado!`);
    }
    removerProduto(nomeProduto) {
        const index = this.produtos.findIndex(produto => produto.getNome() === nomeProduto);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto "${nomeProduto}" removido!`);
        }
        else {
            console.log(`Produto "${nomeProduto}" não encontrado.`);
        }
    }
    mostrarProdutos() {
        if (this.produtos.length > 0) {
            console.log("Produtos na loja:");
            this.produtos.forEach(produto => produto.mostrarInfo());
        }
        else {
            console.log("Nenhum produto na loja.");
        }
    }
}
// Criando produtos
// Eletronico
const produtoTeclado = new Eletronico_1.Eletronico('Teclado Lenovo', 79.90, 47, 220);
const produtoTV = new Eletronico_1.Eletronico('Televisao Samsung 32 polegadas', 1099.90, 7, 110);
const produtoMouse = new Eletronico_1.Eletronico('Mouse Logitech', 59.90, 30, 110);
const produtoMonitor = new Eletronico_1.Eletronico('Monitor Dell 24 polegadas', 849.90, 15, 220);
const produtoNotebook = new Eletronico_1.Eletronico('Notebook Acer', 3499.00, 5, 110);
const produtoImpressora = new Eletronico_1.Eletronico('Impressora HP', 499.90, 12, 220);
const produtoSmartphone = new Eletronico_1.Eletronico('Smartphone iPhone 13', 6999.00, 8, 110);
// Alimento
const produtoMacarrao = new Alimento_1.Alimento('Nissim Miojo', 1.50, 50, '01/12/2024');
const produtoArroz = new Alimento_1.Alimento('Arroz Branco', 4.99, 100, '15/03/2025');
const produtoFeijao = new Alimento_1.Alimento('Feijão Preto', 6.99, 80, '10/08/2025');
const produtoLeite = new Alimento_1.Alimento('Leite Integral', 3.99, 25, '20/01/2024');
const produtoCereal = new Alimento_1.Alimento('Nescau Cereal', 9.99, 40, '18/09/2026');
const produtoSucoLaranja = new Alimento_1.Alimento('Suco de Laranja Concentrado', 3.99, 60, '25/07/2025');
const produtoBiscoito = new Alimento_1.Alimento('Biscoito Zezé', 7.99, 120, '12/06/2026');
// Produto
const produtoCadeira = new Produto_1.Produto('Cadeira de Escritório', 249.90, 15);
const produtoCamisa = new Produto_1.Produto('Camisa Polo Masculina', 59.90, 50);
const produtoLivro = new Produto_1.Produto('Livro de Programação', 49.90, 30);
const produtoFoneBluetooth = new Produto_1.Produto('Fone Bluetooth Sony', 199.90, 20);
const produtoRelogio = new Produto_1.Produto('Relógio de Pulso Casio', 129.90, 25);
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
