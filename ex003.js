// Funcao responsavel 
const inverterString = (string) => { // <--- Palavra e passada pra funcao por parametro
    let reverso = '' // Variavel definida para armazenar a string invertida

    for(let i=0; i<string.length; i++){  // <--- itera entre os elementos 
        reverso = string[i] + reverso
    }

    return reverso;
}

let palavra = 'Matrix'

invertido = inverterString(palavra);

console.log(`${invertido}`)