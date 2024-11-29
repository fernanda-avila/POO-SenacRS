import promptSync from 'prompt-sync';
const teclado = promptSync();


class Estudante {
    public nome: string;
    public idade: number;
    private nota: Float32Array;
    private matricula: string;


    constructor(nome: string, idade: number, nota: Float32Array, matricula: string) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
        this.matricula = matricula;
    }


    public getNome() {
        return this.nome;
    }


    public setNome(nome: string): void {
        this.nome = nome;
    }


    public getIdade() {
        return this.idade;
    }


    public setIdade(idade: number): void {
        this.idade = idade;
    }


    public getNota() {
        return this.nota;
    }


    public setNota(nota: Float32Array): void {
        this.nota = nota;
    }


    public getMatricula() {
        return this.matricula;
    }


    public setMatricula(matricula: string): void {
        this.matricula = matricula;
    }


    public calcularMedia(): number {
        const total = this.nota.reduce((acumulado, valor) => acumulado + valor, 0);
        return total / this.nota.length;
    }
}




const nota1 = parseFloat(teclado('Digite a nota 1: '));
const nota2 = parseFloat(teclado('Digite a nota 2: '));
const nota3 = parseFloat(teclado('Digite a nota 3: '));




const notas = new Float32Array([nota1, nota2, nota3]);




const estudante = new Estudante('Claudia', 16, notas, '501313');




const media = estudante.calcularMedia();


console.log(`A média das notas de ${estudante.getNome()} é: ${media.toFixed(2)}`);
   
