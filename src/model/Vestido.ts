import { Roupas } from "./Roupas";

export class Vestido extends Roupas{

    private _comprimento: string;

    constructor(id: number, nome: string, tamanho: string, cor: string, preco: number, estoque: number, material: string, comprimento: string){
        super(id, nome, tamanho, cor, preco, estoque, material);
        this._comprimento= comprimento;
    }
    
    
    public get comprimento(){
        return this._comprimento;
    }
    public set comprimento(comprimento: string){
        this._comprimento= comprimento;
    }
    
    public visualizar(): void {
        super.visualizar();
        console.log("Comprimento do vestido " + this._comprimento);
    }
}