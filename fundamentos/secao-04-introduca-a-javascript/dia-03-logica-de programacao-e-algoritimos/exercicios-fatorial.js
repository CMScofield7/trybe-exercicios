// Fatorial!

let fatorial = 1;

for (let index = 10 /* index sendo numero que você quer fatorar */; index > 0 /* Todo fatorial é maior que 0 */; index-= 1 /* O fatorial regride do numero declarado como fatorial */) {
    fatorial *= index // fatorial = fatorial * index   
}

console.log("Resultado: " + fatorial); 


