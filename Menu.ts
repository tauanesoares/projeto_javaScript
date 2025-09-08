import { colors } from "./src/util/Colors";
import readlinesync = require("readline-sync");
import { Roupas } from "./src/model/Roupas";
import { Camiseta } from "./src/model/Camiseta";
import { Vestido } from "./src/model/Vestido";
import { RoupasController } from "./src/controller/RoupasController";


export function main() {
    

    //clase controller
    let roupas: RoupasController = new RoupasController();
    const tiposRoupas = ["Camiseta", "Vestido"];

    let opcao: number, id: number, preco: number, estoque: number, tipo: number;
    let nome: string, tamanho: string, cor: string, material: string, estilomanga: string, comprimento: string;

    while(true){
    console.log(colors.bg.black, colors.fg.magentastrong,
        "\n===================================");
    console.log("       🛍️ MENU LOOKSTORE");
    console.log("===================================");
    console.log("1 - Cadastrar Roupa");
    console.log("2 - Listar Roupas");
    console.log("3 - Buscar Roupa por id");
    console.log("4 - Atualizar Roupa");
    console.log("5 - Excluir roupa");
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
                console.log("Escolha o tipo de roupa:");
                console.log("1 - Camiseta");
                console.log("2 - Vestido");
                tipo = readlinesync.questionInt("Tipo: ");

                nome = readlinesync.question("Nome: ");
                preco = readlinesync.questionFloat("Preço: ");
                estoque = readlinesync.questionInt("Estoque: ");
                tamanho = readlinesync.question("Tamanho: ");
                cor = readlinesync.question("Cor: ");
                material = readlinesync.question("Material: ");

                if (tipo === 1) {
                    estilomanga = readlinesync.question("Estilo da manga: ");
                    const camiseta = new Camiseta(roupas.gerarNumero(), nome, tamanho, cor, preco, estoque, material, estilomanga);
                    roupas.cadastrar(camiseta);
                } else if (tipo === 2) {
                    comprimento = readlinesync.question("Comprimento: ");
                    const vestido = new Vestido(roupas.gerarNumero(), nome, tamanho, cor, preco, estoque, material, comprimento);
                    roupas.cadastrar(vestido);
                } else {
                    console.log(colors.fg.redstrong, "Tipo de roupa inválido!", colors.reset);
                }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as roupas\n\n", colors.reset);
                roupas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar roupas por id\n\n", colors.reset);
                    console.log("Digite o id da roupa que deseja consultar: ");
                    id = readlinesync.questionInt("Id: ");
                    roupas.procurarPorNumero(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Roupa\n\n", colors.reset);

                console.log("Digite o número da Roupa: ");
                id = readlinesync.questionInt("");

                let roupa = roupas.buscarNoArray(id);

                if (roupa != null) {

                    console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar roupa:\n\n", colors.reset);
                    console.log("Escolha o tipo de roupa:");
                    console.log("1 - Camiseta");
                    console.log("2 - Vestido");
                    tipo = readlinesync.questionInt("Tipo: ");
                    nome = readlinesync.question("Nome: ");
                    preco = readlinesync.questionFloat("Preço: ");
                    estoque = readlinesync.questionInt("Estoque: ");
                    tamanho = readlinesync.question("Tamanho: ");
                    cor = readlinesync.question("Cor: ");
                    material = readlinesync.question("Material: ");

                    if (tipo === 1) {
                    estilomanga = readlinesync.question("Estilo da manga: ");
                    const camiseta = new Camiseta(roupas.gerarNumero(), nome, tamanho, cor, preco, estoque, material, estilomanga);
                    roupas.atualizar(camiseta);
                } else if (tipo === 2) {
                    comprimento = readlinesync.question("Comprimento: ");
                    const vestido = new Vestido(roupas.gerarNumero(), nome, tamanho, cor, preco, estoque, material, comprimento);
                    roupas.atualizar(vestido);
                } 
                }else {
                    console.log(colors.fg.red, "\nA Conta numero: " + id + " não foi encontrada!", colors.reset);
                }

                keyPress();
                break;
                
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nExxcluir roupa\n\n", colors.reset);

                console.log("Digite o id da roupa: ");
                id = readlinesync.questionInt("");
                roupas.deletar(id);

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