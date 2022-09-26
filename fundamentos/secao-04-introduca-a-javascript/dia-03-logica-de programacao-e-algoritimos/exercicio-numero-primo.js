let numeroPrimo = 50;
let maiorNumero = 0;

for (let index = 0; index <= numeroPrimo; index+= 1) {
       let ehPrimo = true;
       for (let divisor = 2; divisor < index; divisor+= 1) {
        /* console.log(index,"Numero atual");
        console.log(divisor, "Divisor atual"); */
        if (index % divisor === 0) {
            ehPrimo = false;
        }
        
       }
       if (ehPrimo) {
        maiorNumero = index;
       }
}

console.log(maiorNumero);

