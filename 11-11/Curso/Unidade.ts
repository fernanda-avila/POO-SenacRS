import {modelo} from "./Modelo"

export class unidade extends modelo {
   
    private ativo: boolean

    constructor(nome:string, id:Int16Array, ativo:boolean) {
        super (nome,id)
        this.ativo = ativo;
    }
    
    public getAtivo() {
        return this.ativo
    }
    public setAtivo(ativo:boolean):void {
        this.ativo = ativo;
    }
}
