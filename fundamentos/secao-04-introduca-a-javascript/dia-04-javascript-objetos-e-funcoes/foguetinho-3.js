// Retornar se verdadeiro ou falso

function verificaPalindrome(palavraReversa) {

    let palavraPicotada = palavraReversa.split(""); // ".split" divide as letras da string em um array em que as letras individualmente são strings

    let picotadaReversa = palavraPicotada.reverse(); // ".reverse" inverte o array: o último indo em primeiro

    let juntarPalavra = picotadaReversa.join(""); // ".join" serve pra juntar os elementos de um array transformando eles em string

    if (palavraReversa === juntarPalavra) {
        return true;
    }

    return false;

}

console.log(verificaPalindrome("reinier"));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function arrayDeInteiros(array) {
    let maiorIndice = 0;

    for (let index = 0; index < array.length; index+= 1) {
       if (array[index] > maiorIndice) {
        maiorIndice = index;
       }
    }
    return maiorIndice;
}

console.log(arrayDeInteiros([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function arrayDeInteiros2(array2) {
    let menorIndice = array2.length - 1;

    for (let index = 0; index < array2.length; index+= 1) {
       if (array2[index] < menorIndice) {
        menorIndice = index;
       }
    }
    return menorIndice;
}

console.log(arrayDeInteiros2([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(nomes) {
    let maisCaracteres = nomes[0];

    for (let index = 0; index < nomes.length; index += 1) {
        if (nomes[index].length > maisCaracteres.length) {
            maisCaracteres = nomes[index];
        }        
    }
    return maisCaracteres;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepetidos(array3) {
//     let numeroMaisRepetido = 0;
//     let quantasVezesONumeroRepete = 0;
//     let indiceDoMaisRepetido = 0;

//     for (let indice = 0; indice < array3.length; indice++) {
//         let posicaoDoIndice = array3[indice];
//         for (let indice2 = 0; indice2 < array3.length; indice2++) {
//             if (posicaoDoIndice === array3[indice2]) {
//                 quantasVezesONumeroRepete += 1
//             }            
//         }
//         if (numeroMaisRepetido > quantasVezesONumeroRepete) {
//             indiceDoMaisRepetido = indice;
//         }
//         quantasVezesONumeroRepete = 0;
//     }
//     return array3[indiceDoMaisRepetido];
// }

console.log(maisRepetidos([2, 3, 2, 5, 8, 2, 3]));