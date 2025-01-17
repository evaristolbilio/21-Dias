let modelos = []
let anos = []
let valores = []
let continuar = true 
let contador = 0

while(continuar){
    let modelo = prompt(' Qual o modelo do carro que você deseja? ')
    modelos[contador] = modelo
    let ano = prompt(' Qual seria o ano do carro? ')
    anos[contador] = ano
    let valor = parseFloat(prompt(' Qual valor você tem para investir no seu carro? '))
    valores[contador] = valor 
    contador++

    let resposta = prompt('Deseja inserir outras informações? (s/n)?')
    if(resposta === "n")
        continuar = false
}

console.log(' Carros cadastrados')
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}

for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]){
            
           let modeloMaiorValor = modelos [j]
           modelos[j] = modelos [j + 1]
           modelos[j + 1] = modeloMaiorValor

           let anoMaiorValor = anos[j]
           anos[j] = anos [j + 1]
           anos[j + 1] = anoMaiorValor

           let maiorValor = valores[j]
           valore[j] = valores[j + 1]
           valores[j + 1] = maiorValor
        }
    }
}

console.log(' Carros ordenados pelo preço: ')
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + ' - ' + anos [i] + ' - ' + valores[i])
}