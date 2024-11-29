"use strict";
class Livro {
    constructor(titulo, autor, anoPublicacao, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getanoPublicacao() {
        return this.anoPublicacao;
    }
    setDisponivel(disponivel) {
        this.disponivel = disponivel;
    }
    emprestar() {
        if (this.disponivel) {
            this.setDisponivel(false);
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        }
        else {
            console.log(`O livro "${this.titulo}" não está disponível para empréstimo.`);
        }
    }
    devolver() {
        if (!this.disponivel) {
            this.setDisponivel(true);
            console.log(`O livro "${this.titulo}" foi devolvido.`);
        }
        else {
            console.log(`O livro "${this.titulo}" já está disponível.`);
        }
    }
    exibirInformacoes() {
        console.log(`titulo: ${this.titulo}, autor: ${this.autor}, anoPublicacao: ${this.anoPublicacao}, dsiponivel: ${this.disponivel}`);
    }
}
const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
livro.exibirInformacoes();
livro.emprestar();
livro.devolver();
