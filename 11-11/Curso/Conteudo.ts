import {modelo} from "./Modelo"

export class conteudo extends modelo {
    url:string

    constructor(nome:string, id:Int16Array, url:string) {
        super (nome,id)
        this.url = url;
    }
    public getUrl() {
        return this.url;
    }
    public setUrl (url:string): void {
        this.url = url;
    }
}