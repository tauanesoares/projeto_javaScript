import { Roupas } from "./Roupas";

export class Camiseta extends Roupas{

    private _estilomanga: string;

    constructor(id: number, nome: string, tamanho: string, cor: string, preco: number, estoque: number, material: string, estilomanga: string){
        super(id, nome, tamanho, cor, preco, estoque, material);
        this._estilomanga= estilomanga;
    }
    
    
    public get estilomanga(){
        return this._estilomanga;
    }
    public set estilomanga(estilomanga: string){
        this._estilomanga= estilomanga;
    }
    
    public visualizar(): void {
        super.visualizar();
        console.log("Estilo da manga: " + this._estilomanga);
    }
}