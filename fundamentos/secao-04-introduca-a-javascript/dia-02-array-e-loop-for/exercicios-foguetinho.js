// Foguetinho

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;
let maiorValor = 0;
let impar = 0;
let menorValor = numbers.length;


for (let index = 0; index < numbers.length; index+= 1) {

    soma += numbers[index];
    media = soma / numbers.length;

    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }; // Como saber o maior valor dentro de um array!

    if (numbers[index] % 2 !== 0) {
        impar += 1;
    }; //Quantidade de numéros impares. Se for descobrir os pares, trocar "!" por "="

    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }; // Descobrindo o menor valor dentro do array!

}

if (media > 20) {
        console.log("Valor maior que 20!");
    }
    else {
        console.log("Menor ou igual a 20!");
    };

if (impar === 0) {
    console.log("Nenhum valor impar encontrado...")
} else {
    console.log(impar);
};



console.log(numbers);
console.log(soma);
console.log(media);
console.log(maiorValor);
console.log(menorValor);