import { Roupas } from "../model/Roupas";
import { RoupasRepository } from "../repository/RoupasRepository";
import { colors } from "../util/Colors";

export class RoupasController implements RoupasRepository {
    private listaRoupas: Array<Roupas> = new Array<Roupas>();
    id: number = 0;

    procurarPorNumero(numero: number): void{
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log( "\nA Conta numero: " + numero 
                + " não foi encontrada!");
        }
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
        let buscaConta = this.buscarNoArray(roupa.id);

        if (buscaConta != null) {
            this.listaRoupas[this.listaRoupas.indexOf(buscaConta)] = roupa;
            console.log(colors.fg.green, "\nA Roupa numero: " + roupa.id + 
                " foi atualizada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Roupa numero: " + roupa.id + 
                " não foi encontrada!", colors.reset);
        }
    };
	deletar(id: number): void{
         let buscaConta = this.buscarNoArray(id);

        if (buscaConta != null) {
            this.listaRoupas.splice(this.listaRoupas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA roupa numero: " + id + 
                " foi apagada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA roupa numero: " + id + 
                " não foi encontrada!", colors.reset);
        }
    };



    gerarNumero(): number{
        return ++this.id;
    }

    public buscarNoArray(numero: number): Roupas | null {

        for (let roupa of this.listaRoupas) {
            if (roupa.id === numero)
                return roupa;
        }

        return null;
    }


}