// Inverter palavras

let word = "tryber" //Palavra que eu quero inverter
let reverseWord = "" //String vazia pra receber a palavra que eu quero inverter

for (let index = word.length -1 /* O ponto inicial é o length -1, que corresponde ao último caractere da palavra */; index >= 0 /* Enquanto o indice for maior ou igual a 0, o laço continua */; index-= 1 /* A cada iteração, vai decrementando */) {
    reverseWord += word[index]; // reverseWord = reverseWord + word[index]
}
console.log(reverseWord);