var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario, cpf) {
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    Funcionario.prototype.getCPF = function () {
        return this.cpf;
    };
    Funcionario.prototype.setCPF = function (cpf) {
        this.cpf = cpf;
    };
    Funcionario.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome, ", Sal\u00E1rio: ").concat(this.salario.toFixed(2), ", CPF: ").concat(this.cpf));
    };
    Funcionario.prototype.exibirInformacoesAtualizadas = function () {
        console.log("INFORMA\u00C7\u00D5ES ATUALIZADAS: Nome: ".concat(this.nome, ", Sal\u00E1rio: ").concat(this.salario.toFixed(2), ", CPF: ").concat(this.cpf));
    };
    Funcionario.prototype.aumentarSalario = function (percentual) {
        this.salario += this.salario * (percentual / 100);
        console.log("Novo sal\u00E1rio ap\u00F3s aumento de ".concat(percentual, "%: ").concat(this.salario));
    };
    return Funcionario;
}());
var funcionario = new Funcionario("João", 3000, "123.456.789-00");
funcionario.exibirInformacoes();
funcionario.aumentarSalario(10);
funcionario.exibirInformacoesAtualizadas();
