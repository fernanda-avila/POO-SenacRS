var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.adicionarEstoque = function (qtd) {
        if (qtd > 0) {
            this.quantidade += qtd;
            console.log("".concat(qtd, " unidades adicionadas ao estoque."));
        }
        else {
            console.log('Quantidade inválida para adicionar ao estoque.');
        }
    };
    Produto.prototype.removerEstoque = function (qtd) {
        if (qtd > 0) {
            if (this.quantidade >= qtd) {
                this.quantidade -= qtd;
                console.log("".concat(qtd, " unidades removidas do estoque."));
            }
            else {
                console.log('Estoque insuficiente.');
            }
        }
        else {
            console.log('Quantidade inválida para remover do estoque.');
        }
    };
    Produto.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome, ", Pre\u00E7o: R$").concat(this.preco, ", Quantidade: ").concat(this.quantidade));
    };
    return Produto;
}());
var produto = new Produto('Camiseta', 50, 10);
produto.exibirInformacoes();
produto.adicionarEstoque(5);
produto.removerEstoque(3);
produto.exibirInformacoes();
produto.removerEstoque(15);
