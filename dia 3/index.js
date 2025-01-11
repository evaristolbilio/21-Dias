let nome = ""
let idade = 0 
let altura = 0
let peso = 0 

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
altura = parseFloat(prompt ("Qual sua altura"))
peso = parseInt(prompt("Digite seu peso"))

let anoNas = 0 
anoNas = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

console.log (" Olá, "  + nome +  " Você  tem "  + idade +  " anos,  nasceu em "  + anoNas +  " ,  tem "  + altura +  " de altura,  pesa "  + peso +  " kg  e seu  imc é "  + imc +  " kg/m² ")