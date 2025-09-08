import { Roupas } from "../model/Roupas";
import { RoupasRepository } from "../repository/RoupasRepository";

export class RoupasController implements RoupasRepository {
    private listaRoupas: Array<Roupas> = new Array<Roupas>();
    id: number = 0;

    procurarPorNumero(numero: number): void{

    };

	listarTodas(): void{
        for (let roupa of this.listaRoupas){  
            roupa.visualizar();
        }
    };

	cadastrar(roupa: Roupas): void{
        this.listaRoupas.push(roupa);
        console.log("Roupa: " + roupa.id + "foi cadastrada com sucesso!");
    };

	atualizar(roupa: Roupas): void{

    };
	deletar(id: number): void{

    };



    gerarNumero(): number{
        return ++this.id;
    }
}