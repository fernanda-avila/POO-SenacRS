var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getanoPublicacao = function () {
        return this.anoPublicacao;
    };
    Livro.prototype.setDisponivel = function (disponivel) {
        this.disponivel = disponivel;
    };
    Livro.prototype.emprestar = function () {
        if (this.disponivel) {
            this.setDisponivel(false);
            console.log("O livro \"".concat(this.titulo, "\" foi emprestado."));
        }
        else {
            console.log("O livro \"".concat(this.titulo, "\" n\u00E3o est\u00E1 dispon\u00EDvel para empr\u00E9stimo."));
        }
    };
    Livro.prototype.devolver = function () {
        if (!this.disponivel) {
            this.setDisponivel(true);
            console.log("O livro \"".concat(this.titulo, "\" foi devolvido."));
        }
        else {
            console.log("O livro \"".concat(this.titulo, "\" j\u00E1 est\u00E1 dispon\u00EDvel."));
        }
    };
    Livro.prototype.exibirInformacoes = function () {
        console.log("titulo: ".concat(this.titulo, ", autor: ").concat(this.autor, ", anoPublicacao: ").concat(this.anoPublicacao, ", dsiponivel: ").concat(this.disponivel));
    };
    return Livro;
}());
var livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
livro.exibirInformacoes();
livro.emprestar();
livro.devolver();
