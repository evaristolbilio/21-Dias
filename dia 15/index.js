// Declaração dos arrays com valores pré-definidos
let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

// Função que retorna os números em comum entre dois arrays
function numerosEmComum(arr1, arr2) {
    // Usar um Set para evitar repetições no array de saída
    let resultado = new Set();

    // Criar um objeto para contar ocorrências em ambos os arrays
    let contador = {};

    // Contar ocorrências no primeiro array
    arr1.forEach(num => {
        if (!contador[num]) {
            contador[num] = { arrayA: 0, arrayB: 0 };
        }
        contador[num].arrayA++;
    });

    // Contar ocorrências no segundo array
    arr2.forEach(num => {
        if (!contador[num]) {
            contador[num] = { arrayA: 0, arrayB: 0 };
        }
        contador[num].arrayB++;
    });

    // Adicionar ao resultado apenas os números presentes em ambos os arrays exatamente uma vez
    for (let num in contador) {
        if (contador[num].arrayA === 1 && contador[num].arrayB === 1) {
            resultado.add(Number(num));
        }
    }

    // Retornar o resultado como um array
    return Array.from(resultado);
}

// Chamada da função com os arrays de entrada
let numerosComuns = numerosEmComum(arrayA, arrayB);

// Exibir o resultado no console
console.log(numerosComuns);