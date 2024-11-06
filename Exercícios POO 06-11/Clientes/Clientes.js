var Clientes = /** @class */ (function () {
    function Clientes(nome, telefone, email) {
        this.Nome = nome;
        this.Telefone = telefone;
        this.Email = email;
    }
    Clientes.prototype.getNome = function () {
        return this.Nome;
    };
    Clientes.prototype.setNome = function (nome) {
        this.Nome = nome;
    };
    Clientes.prototype.getTelefone = function () {
        return this.Telefone;
    };
    Clientes.prototype.setTelefone = function (telefone) {
        this.Telefone = telefone;
    };
    Clientes.prototype.getEmail = function () {
        return this.Email;
    };
    Clientes.prototype.setEmail = function (email) {
        this.Email = email;
    };
    Clientes.prototype.ExibirInformaçoes = function () {
        console.log("Nome: ".concat(this.Nome));
        console.log("Telefone: ".concat(this.Telefone));
        console.log("Email: ".concat(this.Email));
    };
    return Clientes;
}());
var clientee = new Clientes("Fernanda", 553991968011, "avilafernandaa@gmail.com");
clientee.ExibirInformaçoes();
clientee.setTelefone(53984288148);
clientee.setEmail("fernandavila987@gmail.com");
console.log("\n Informações atualizadas");
clientee.ExibirInformaçoes();
