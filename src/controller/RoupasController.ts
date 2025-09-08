import { Roupas } from "../model/Roupas";
import { RoupasRepository } from "../repository/RoupasRepository";

export class RoupasController implements RoupasRepository {
    private listaRoupas: Array<Roupas> = new Array<Roupas>();


    procurarPorNumero(numero: number): void{

    };
	listarTodas(): void{

    };
	cadastrar(roupa: Roupas): void{

    };
	atualizar(roupa: Roupas): void{

    };
	deletar(id: number): void{
        
    };
}