// DESCOBRINDO IMC 
let imc = peso / (altura * altura)

if(imc <= 18.5){
    console.log("Magreza")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Normal")
}else if(imc >= 25 && imc <= 30){
    console.log("Sobrepeso")
}else {
    console.log("Obsidade")
}

// DESCOBRINDO O ANO DO NASCIMENTO
let anoAtual = 2025
let anoNasc = anoAtual - idade 
console.log(" Você nasceu no ano de " + anoNasc)

//EXIBINDO ANOS E IDADES
let anoVivido = anoNasc
let idadeAtual = 0 

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + " - " + idadeAtual + " anos de idade ")
    idadeAtual++
}

//LOPP DOWHILE
do{
    let continuar = prompt("Deseja inserir os dados novamente? (s/n)")
}while (continuar == "s")

