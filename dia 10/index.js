let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt(' Digite o quantidade de número para inserir no array'))

for(let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt(' Digite o ' + (i +1) + ' numero '))
    array [i] = numero
}

console.log('Arrey original: ' + array)

let contador = quantidade -1 
for(let i = 0; i < 5; i ++){
    arrayInvertido[i] = array[contador]
    contador--
}

console.log('Array invertido: ' + arrayInvertido)