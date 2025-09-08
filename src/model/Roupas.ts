export abstract class Roupas {

    private _id: number
    private _nome : string
    private _tamanho: string
    private _cor: string
    private _preco: number
    private _estoque: number
    private _material: string

    constructor(id: number, nome: string, tamanho: string, cor: string, preco: number, estoque: number, material: string) {
        this._id = id;
        this._nome = nome;
        this._tamanho = tamanho;
        this._cor = cor;
        this._preco = preco;
        this._estoque = estoque;
        this._material = material;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get tamanho(): string {
        return this._tamanho;
    }
    public set tamanho(value: string) {
        this._tamanho = value;
    }

    public get cor(): string {
        return this._cor;
    }
    public set cor(value: string) {
        this._cor = value;
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }

    public get estoque(): number {
        return this._estoque;
    }
    public set estoque(value: number) {
        this._estoque = value;
    }

    public get material(): string {
        return this._material;
    }
    public set material(value: string) {
        this._material = value;
    }

    

    public visualizar(): void {

       
    console.log(`ID: ${this._id}`);
    console.log(`Nome: ${this._nome}`);
    console.log(`Tamanho: ${this._tamanho}`);
    console.log(`Cor: ${this._cor}`);
    console.log(`Preço: R$${this._preco.toFixed(2)}`);
    console.log(`Estoque: ${this._estoque}`);
    console.log(`Material: ${this._material}`);

    }

}