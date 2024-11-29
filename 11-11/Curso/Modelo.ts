 export class modelo {
    private nome: string
    private id: Int16Array

    constructor(nome:string, id:Int16Array){

        this.nome = nome;
        this.id = id;

    }

    public getNome() {
        return this.nome
    }
    public setNome(nome:string):void {
        this.nome = nome;
    }

    public getId() {
        return this.id
    }
    public setId(id:Int16Array){
        this.id = id;
    }
}