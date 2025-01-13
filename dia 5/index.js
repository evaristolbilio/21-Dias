let valor
let quantidade
let opcao = parseInt(prompt("Bem- vindo ao postão:" + "\n1 = Abastecer com gasolina; \n2 = Abastecer com álcool; \n3 = Calibrar os pneus;"))

switch (opcao) {
    case 1:
        valor = parseInt(prompt("Qual o valor que você deseja abastecer"))
        quantidade = valor / 5 
        console.log(" Foi abastecido " + quantidade + " L de gasolina ")
        break;
    case 2:
        valor = parseInt(prompt("Qual o valor que deseja abastecer"))
        quantidade = valor / 4 
        console.log (" Foram abstecidos " + quantidade + " L de álcool ")
        break;
    default:
        console.log("pneus calibrados com sucesso")
        break;        
}