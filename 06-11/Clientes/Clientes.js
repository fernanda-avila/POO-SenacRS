"use strict";
class Clientes {
    constructor(nome, telefone, email) {
        this.Nome = nome;
        this.Telefone = telefone;
        this.Email = email;
    }
    getNome() {
        return this.Nome;
    }
    setNome(nome) {
        this.Nome = nome;
    }
    getTelefone() {
        return this.Telefone;
    }
    setTelefone(telefone) {
        this.Telefone = telefone;
    }
    getEmail() {
        return this.Email;
    }
    setEmail(email) {
        this.Email = email;
    }
    ExibirInformaçoes() {
        console.log(`Nome: ${this.Nome}`);
        console.log(`Telefone: ${this.Telefone}`);
        console.log(`Email: ${this.Email}`);
    }
}
const clientee = new Clientes("Fernanda", 553991968011, "avilafernandaa@gmail.com");
clientee.ExibirInformaçoes();
clientee.setTelefone(53984288148);
clientee.setEmail("fernandavila987@gmail.com");
console.log("\n Informações atualizadas");
clientee.ExibirInformaçoes();
