var Cachorro = /** @class */ (function () {
    function Cachorro(raca, nome, porte, pedigree, peso, dataNascimento, temperamento) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
        this.pedigree = pedigree;
        this.peso = peso;
        this.dataNascimento = dataNascimento;
        this.temperamento = temperamento;
    }
    Cachorro.prototype.exibirInformacoes = function () {
        console.log("Ra\u00E7a: ".concat(this.raca));
        console.log("Nome: ".concat(this.nome));
        console.log("Porte: ".concat(this.porte));
        console.log("Pedigree: ".concat(this.pedigree));
        console.log("Peso: ".concat(this.peso, " kg"));
        console.log("Data de Nascimento: ".concat(this.dataNascimento.toDateString()));
        console.log("Temperamento: ".concat(this.temperamento));
    };
    Cachorro.prototype.calcularTamanhoRoupinha = function () {
        if (this.peso <= 5) {
            return "Pequeno";
        }
        else if (this.peso <= 15) {
            return "Médio";
        }
        else if (this.peso <= 30) {
            return "Grande";
        }
        else {
            return "Extra Grande";
        }
    };
    return Cachorro;
}());
var cachorro = new Cachorro("Labrador", "Buddy", "Grande", "Sim", 30, new Date("2020-06-15"), "Amigável");
console.log("Tamanho da roupinha: ".concat(cachorro.calcularTamanhoRoupinha()));
cachorro.nome = "Max";
cachorro.peso = 32;
console.log("\nInformações atualizadas:");
cachorro.exibirInformacoes();
console.log("Tamanho da roupinha: ".concat(cachorro.calcularTamanhoRoupinha()));
