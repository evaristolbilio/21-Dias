let nome 
let idade 
let temCarta = false
let temCarro = false

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Qual a sua idade?"))
let opcaoCarta = prompt("você tem carta de motorista (Sim/Não) ")
if (opcaoCarta === "Sim"){
    temCarta =  true
}
let opcaoCarro = prompt("Voceê tem carro? (Sim/Não)")
if (opcaoCarro === "Sim"){
    temCarro = true
}
if (idade < 18 || temCarta){
    console.log(nome + " , você não pode dirigir ")
}else if(idade >= 18 && temCarta || temCarro){
    console.log(nome + " , você pode dirigir mas não tem carro ")
}else {
    console.log(nome + " , você será o motorista ")
}