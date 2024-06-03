let palavra = 'Hello World!'

// Funcao responsavel 
const inverterString = (string) => { // <--- Palavra e passada pra funcao por parametro
    let reverso = '' // Variavel definida para armazenar a string invertida

    for(let i=0; i<string.length; i++){  // <--- itera entre os elementos da string, invertendo a ordem deles
        reverso = string[i] + reverso
    }

    return reverso; // <--- retorna a string invertida
}

invertido = inverterString(palavra);

console.log(`${invertido}`)

// Por: Kayky Rodrigues da Silva