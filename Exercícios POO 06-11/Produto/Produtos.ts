class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;
 
    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
 
    adicionarEstoque(qtd: number): void {
      if (qtd > 0) {
        this.quantidade += qtd;
        console.log(`${qtd} unidades adicionadas ao estoque.`);
      } else {
        console.log('Quantidade inválida para adicionar ao estoque.');
      }
    }
 
    removerEstoque(qtd: number): void {
      if (qtd > 0) {
        if (this.quantidade >= qtd) {
          this.quantidade -= qtd;
          console.log(`${qtd} unidades removidas do estoque.`);
        } else {
          console.log('Estoque insuficiente.');
        }
      } else {
        console.log('Quantidade inválida para remover do estoque.');
      }
    }
 
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`);
    }
  }
 
  const produto = new Produto('Camiseta', 50, 10);
  produto.exibirInformacoes();
  produto.adicionarEstoque(5);
  produto.removerEstoque(3);
  produto.exibirInformacoes();
  produto.removerEstoque(15);
