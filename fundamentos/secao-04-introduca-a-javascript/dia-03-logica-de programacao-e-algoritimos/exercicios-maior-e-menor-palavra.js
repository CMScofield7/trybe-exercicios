// Maior palavra e menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index+= 1) {
    if (array[index].length > maiorPalavra.length) { // Se o tamanho (length) do index atual da variavel "array" for maior (>) que o tamanho atual (length) da variavel "maiorPalavra"
        maiorPalavra = array[index]; // "maiorPalavra" recebe (=) o valor do index atual da variavel "array"
    }
}

for (let index = 0; index < array.length; index+= 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);