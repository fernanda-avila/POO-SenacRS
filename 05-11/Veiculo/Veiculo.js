var Veiculo = /** @class */ (function () {
    function Veiculo(modelo, ano, potencia, numeroMarchas, velocidadeAtual, marchaAtual) {
        this.modelo = modelo;
        this.ano = ano;
        this.potencia = potencia;
        this.numeroMarchas = numeroMarchas;
        this.velocidadeAtual = velocidadeAtual;
        this.marchaAtual = marchaAtual;
    }
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Veiculo.prototype.getAno = function () {
        return this.ano;
    };
    Veiculo.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Veiculo.prototype.getPotencia = function () {
        return this.potencia;
    };
    Veiculo.prototype.setPotencia = function (podentia) {
    };
    Veiculo.prototype.exibirInformacoes = function () {
        console.log("modelo: ".concat(this.modelo, ", ano: ").concat(this.ano, ", potencia: ").concat(this.potencia));
    };
    return Veiculo;
}());
var veiculo = new Veiculo("peugeot", 2009, "158cv", 6, "20km", 3);
veiculo.exibirInformacoes();
