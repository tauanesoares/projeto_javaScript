import { colors } from "./src/util/Colors";
import readlinesync = require("readline-sync");
import { Roupas } from "./src/model/Roupas";
import { Camiseta } from "./src/model/Camiseta";
import { Vestido } from "./src/model/Vestido";


export function main() {
    


    const vestido1 = new Vestido(2, "Vestido Longo", "G", "Vermelho", 199.90, 50, "Seda", "Longo");
    vestido1.visualizar();
    const camiseta1 = new Camiseta(3, "Camiseta Polo", "P", "Azul", 89.90, 75, "Poliéster", "Manga Curta");
    camiseta1.visualizar();


    let opcao: number;

    while(true){
    console.log(colors.bg.black, colors.fg.magentastrong,
        "\n===================================");
    console.log("       🛍️ MENU LOOKSTORE");
    console.log("===================================");
    console.log("1 - Cadastrar Roupa");
    console.log("2 - Listar Roupas");
    console.log("3 - Atualizar Roupa");
    console.log("4 - Excluir Roupa");
    console.log("5 - Buscar Roupa por ID");
    console.log("0 - Sair");
    console.log("===================================");
    console.log("                                                     ",
        colors.reset);
    
    console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong, 
                "\nLookStore agradece a sua visita!\n", colors.reset);
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCadastrar roupa\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as roupas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar roupa\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nExcluir roupa\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nBuscar roupa por id\n\n", colors.reset);

                keyPress()
                break;

            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }



}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Tauane Soares");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();