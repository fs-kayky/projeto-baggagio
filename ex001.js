let entrada = [5,2,9,1,6,4, 20]

// Funcao resposavel por ler um array de inteiros e definir qual o maior entre eles
const definaMaior = (arr) => {
    let maior = Number.MIN_SAFE_INTEGER // <--- define o menor inteiro seguro para comecar a variavel

    for (const number of arr) { // <--- itera entre os numeros para achar o menor
        if(number > maior) {
            maior = number
        }
    }
    return maior // <-- retorna o menor valor do array
}

console.log(`O maior numero da entrada e: `, definaMaior(entrada))