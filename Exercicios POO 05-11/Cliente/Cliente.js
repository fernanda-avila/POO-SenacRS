var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, dataNasc, qtdDin) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.qtdDin = qtdDin;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cliente.prototype.getCPF = function () {
        return this.cpf;
    };
    Cliente.prototype.setCPF = function (cpf) {
        this.cpf = cpf;
    };
    Cliente.prototype.getDataNasc = function () {
        return this.dataNasc;
    };
    Cliente.prototype.getQtdDin = function () {
        return this.qtdDin;
    };
    Cliente.prototype.setQtdDin = function (qtdDin) {
        this.qtdDin = qtdDin;
    };
    Cliente.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Cpf: ".concat(this.cpf));
        console.log("Data de Nascimento: ".concat(this.dataNasc.toLocaleDateString()));
        console.log("Quantia em dinheiro: R$ ".concat(this.qtdDin));
    };
    Cliente.prototype.temDinheiroSuficiente = function (valorCompra) {
        return this.qtdDin >= valorCompra;
    };
    return Cliente;
}());
var cliente = new Cliente("Fernanda", "123456789-0", new Date(1997, 11, 12), 100);
cliente.exibirInformacoes();
var valorCompra = 75;
if (cliente.temDinheiroSuficiente(valorCompra)) {
    console.log("O cliente pode realizar a compra de R$ ".concat(valorCompra, "."));
}
else {
    console.log("O cliente n\u00E3o tem dinheiro suficiente para a compra de R$ ".concat(valorCompra, "."));
}
