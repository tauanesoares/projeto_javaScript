import { Roupas } from "../model/Roupas";

export interface RoupasRepository {

	// crud
	procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(roupa: Roupas): void;
	atualizar(roupa: Roupas): void;
	deletar(id: number): void;
	
}