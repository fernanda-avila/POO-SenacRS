var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano, quilometragem) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }
    Carro.prototype.getmarca = function () {
        return this.marca;
    };
    Carro.prototype.setmarca = function (marca) {
        this.marca = marca;
    };
    Carro.prototype.getmodelo = function () {
        return this.modelo;
    };
    Carro.prototype.setmodelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getano = function () {
        return this.ano;
    };
    Carro.prototype.setano = function (ano) {
        this.ano = ano;
    };
    Carro.prototype.getquilometragem = function () {
        return this.quilometragem;
    };
    Carro.prototype.setquilometragem = function (quilometragem) {
        this.quilometragem = quilometragem;
    };
    Carro.prototype.exibirInformacoes = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
        console.log("Ano: ".concat(this.ano));
        console.log("Quilometragem: ".concat(this.quilometragem));
    };
    Carro.prototype.andar = function (distancia) {
        this.quilometragem = this.quilometragem + distancia;
        console.log("O carro andou ".concat(distancia, " km. Quilometragem atual: ").concat(this.quilometragem, " km."));
    };
    return Carro;
}());
var carro = new Carro("Ford", "Ka", 2001, 10.000);
carro.exibirInformacoes();
carro.andar(200);
